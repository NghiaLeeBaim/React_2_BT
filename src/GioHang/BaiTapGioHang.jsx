import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import shoeData from "../data/shoeData.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  // Lấy dữ liệu tại componentBaiTapGioHang
  themGioHang = (sanPhamChon) => {
    // B1: từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      id: sanPhamChon.id,
      name: sanPhamChon.name,
      price: sanPhamChon.price,
      soLuong: 1,
      image: sanPhamChon.image,
    };
    // Kiểm tra sp chọn có trong giỏ hàng chưa
    var gioHangCapNhap = [...this.state.gioHang];
    let index = gioHangCapNhap.findIndex((sp) => sp.id === spGioHang.id);
    if (index !== -1) {
      // sản phẩm được click đã có trong this.state.gioHang
      gioHangCapNhap[index].soLuong += 1;
    } else {
      // Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhap.push(spGioHang);
    }
    // set State để component render lại
    this.setState({
      gioHang: gioHangCapNhap,
    });
  };

  // đặt sự kiện xóa bỏ giỏ hàng
  xoaGioHang = (id) => {
    // // Tìm trong giỏ hàng có sp chứ maSP được click thì xóa
    // var gioHangCapNhap=[...this.state.gioHang];
    // let index = gioHangCapNhap.findIndex(sp=>sp.id === id);
    // if(index!==-1){
    //   gioHangCapNhap.splice(index,1);
    // }
    var gioHangCapNhap = this.state.gioHang.filter((sp) => sp.id !== id);
    // cập nhập lại state giỏ hàng và render gioa diện
    this.setState({
      gioHang: gioHangCapNhap,
    });
  };

  tanGiamSoLuong = (id, tanGiam) => {
    // tangGiam===true: tăng số lượng, false: giảm số lượng
    var gioHangCapNhap = [...this.state.gioHang];
    let index = gioHangCapNhap.findIndex((sp) => sp.id === id);
    // Xử lý tăn giảm
    if (tanGiam) {
      gioHangCapNhap[index].soLuong += 1;
    } else {
      if (gioHangCapNhap[index].soLuong > 1) {
        gioHangCapNhap[index].soLuong -= 1;
      }
    }
    // Cập nhập lại giá trị và render lại giỏ hàng
    this.setState({
      gioHang: gioHangCapNhap,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài Tập giỏ hàng</h3>
        <ModalGioHang
          tangGiamSoLuong={this.tanGiamSoLuong}
          xoaGioHang={this.xoaGioHang}
          gioHang={this.state.gioHang}
        />
        <div className="text-right" style={{ textAlign: "right" }}>
          <span
            className="text-danger bold"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          themGioHang={this.themGioHang}
          mangSanPham={shoeData}
        ></DanhSachSanPhamGioHang>
      </div>
    );
  }
}
