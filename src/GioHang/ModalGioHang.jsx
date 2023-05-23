import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "899px", margin: "60px -162px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Id</td>
                    <td>Hình ảnh</td>
                    <td>Tên sản phẩm</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.id}</td>
                        <td>
                          <img
                            src={spGH.image}
                            width={60}
                            height={60}
                            alt="..."
                          />
                        </td>
                        <td>{spGH.name}</td>
                        <td>
                          <button className="btn btn-secondary" onClick={()=>tangGiamSoLuong(spGH.id,false)}>-</button>
                          {spGH.soLuong}
                          <button className="btn btn-secondary" onClick={()=>tangGiamSoLuong(spGH.id,true)}>+</button>
                        </td>
                        <td>{spGH.price}</td>
                        <td>{spGH.soLuong * spGH.price} $</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGioHang(spGH.id)}
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan='5'>Tổng tiền</td>
                    <td>{this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                      return tongTien+=spGioHang.soLuong*spGioHang.price
                    },0)} $</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
