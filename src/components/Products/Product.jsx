import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import './Product.css'
import product_image from '../../assets/images/product_image.PNG'

const Product = () => {
  return (
    <div className='product_div'>
        <div className="product_info">
          <img src={product_image}></img>
          <h4>Favipiravir 400mg (Fabiflu) Tablets</h4>
          <p className='price'>Rs. 1,775 <strong style={{color:'black'}}>/</strong><span> stripe</span></p>
          <div className='manufacturer_div'>
            <p className='title'>Glenmark Pharmaceutical Limited</p>
            <p className='address'>PARVAT PATIYA, SURAT, GUJARAT</p>
            </div>
        </div>
        <div className='contactsupplier_div'>
          <div className='contacticon'><FaPaperPlane /></div>
          <a><p>Contact Supplier</p></a>
        </div>
    </div>
  )
}

export default Product