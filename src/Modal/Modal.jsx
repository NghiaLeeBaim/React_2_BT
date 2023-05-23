import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { sanPhamModal } = this.props;
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
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{sanPhamModal.name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" style={{ display: "flex" }}>
              <div className="left">
              <img
                style={{ padding: "20px", width: "270px" }}
                src={sanPhamModal.image}
                alt=""
              />
              </div>
              <div className="right">
              <p>{sanPhamModal.description}</p>
              <p>{sanPhamModal.price} $</p>
              <button className="btn btn-success">Add to cart</button>
              </div>
              
              
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
