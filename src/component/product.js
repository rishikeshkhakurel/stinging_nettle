import Bread from "../assets/Bread.jpg";
import Chocolate from "../assets/Chocolate.jpg";
import ExtractOil from "../assets/extractOil.jpg";
import { FcRating } from "react-icons/fc";
import InstantNoodles from "../assets/instantNoodles.jpg";
import Photo from "../assets/main.png";
import React from "react";
import SisnoPowder from "../assets/sisnoPowder.jpg";
import SisnoSoup from "../assets/sisnoSoupPremix.jpg";
import SisnuTea from "../assets/SisnuTea.jpg";
import styled from "styled-components";

const ProductWrapper = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  #heading {
    text-align: center;
    font-size: 32px;
  }

  .product-list {
    margin-top: 64px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns with equal width */
    gap: 16px; /* Adjust spacing between items */
  }

  .product {
    background: #fff;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 8px 16px;
    img {
      width: 100%;
      height: 200px;
    
    }
    p {
      margin-top: 8px;
    }
    .price {
      color: #2d6a4f;
    }
    .rating {
      margin-top: 8px;
      font-size: 18px;
    }
  }
`;

function Product() {
  return (
    <ProductWrapper>
      <p id="heading">Our Product</p>
      <div className="product-list">
        <div className="product">
          <div>
            <img src={Photo} alt="product" />
          </div>
          <p>
            <strong>Stinging Nettle</strong>
          </p>
          <p className="price">
            <strong>Rs.1000</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={Bread} alt="bread" />
          </div>
          <p>
            <strong>Bread</strong>
          </p>
          <p className="price">
            <strong>Rs.80</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={Chocolate} alt="chocolate" />
          </div>
          <p>
            <strong>Chocolate</strong>
          </p>
          <p className="price">
            <strong>Rs.120</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={ExtractOil} alt="Extract Oil" />
          </div>
          <p>
            <strong>Extract Oil</strong>
          </p>
          <p className="price">
            <strong>200ml = Rs.250</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={InstantNoodles} alt="instant noodles" />
          </div>
          <p>
            <strong>Instant Noodles</strong>
          </p>
          <p className="price">
            <strong>Rs.50</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={SisnoPowder} alt="Sisnu Powder" />
          </div>
          <p>
            <strong>Sisnu Powder</strong>
          </p>
          <p className="price">
            <strong>200gm = Rs.300</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
        <div className="product">
          <div>
            <img src={SisnoSoup} alt="Sisnu Soup" />
          </div>
          <p>
            <strong>Sisnu Soup Premix</strong>
          </p>
          <p className="price">
            <strong>Rs.160</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>

        <div className="product">
          <div>
            <img src={SisnuTea} alt="sisnu tea" />
          </div>
          <p>
            <strong>Sisnu Tea</strong>
          </p>
          <p className="price">
            <strong>Rs.1000</strong>
          </p>
          <div className="rating">
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
            <FcRating />
          </div>
        </div>
      </div>
     
    </ProductWrapper>
  );
}

export default Product;
