import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPhamGioHang extends Component {
  render() {
    const {mangSanPham,themGioHang} =this.props;

    return (
      <div className='container'>
        <div className='row'>
        {mangSanPham.map((sanPham,index)=>{
                return(
                    <div className='col-4 mt-3' key={index}>
                    <SanPhamGioHang themGioHang={themGioHang} sanPham={sanPham}></SanPhamGioHang>
                    </div>
                )
            })}
        </div>
            
      </div>
    )
  }
}
