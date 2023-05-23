import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham,themGioHang } = this.props;
    return (
      <div className="card text-white bg-secondary">
        <img className="card-img-top" src={sanPham.image} alt={sanPham.image} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.name}</h4>
          <button className="btn btn-light " onClick={()=>themGioHang(sanPham)}>
            Add to cart <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
