import React, { useState } from 'react'
import styled from 'styled-components'
import Photo from "../assets/main.png"
import { FcRating } from "react-icons/fc";

const ProductWrapper = styled.div`
width: 90%;
margin: auto;
height:95vh;
#heading{
    text-align:center;
    font-size: 32px;
}

.product-list{
    margin-top: 64px;
    display:flex;
    justify-content: space-around;

}

.product{
    background: #fff;
    border: 1px solid #000;
    display: inline-block;
    border-radius: 8px;
    padding: 8px 16px;
    img{
        height:250px;
    }
    p{
        margin-top: 8px;
    }
    .price{
        color: #2D6A4F
    }
    .rating{
        margin-top: 8px;
        font-size: 18px;
    }
}



`

function Product() {

    return (
        <ProductWrapper>
            <p id='heading'>Our Product</p>
            <div className='product-list'>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
            </div>
            <div className='product-list'>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
                <div className='product'>
                    <div><img src={Photo} alt="product" /></div>
                    <p><strong>Stinging Nettle</strong></p>
                    <p className="price"><strong>Rs.1000</strong></p>
                    <div className='rating'><FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></div>
                </div>
            </div>


        </ProductWrapper>
    )
}

export default Product
