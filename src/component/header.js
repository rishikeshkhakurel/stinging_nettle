import React from 'react'
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import { FaUserCircle } from "react-icons/fa";

const HeaderWrapper = styled.div`
background: #fff;
position: fixed;
width: 100%;
top: 0;
z-index: 1000; 
    #header{
        width: 50%;
        margin: auto;
        display:flex;
        justify-content: space-between;
        align-items:center;
        padding: 8px 0;

    }

    img{
        height: 40px;
    }

    #menu{
        display: flex;
        p{
            font-size: 16px;
            margin-left: 42px;
            color: #767676;
            cursor: pointer;
            transition: transform 0.3s ease; 
            display: inline-block;
            &:hover{
                transform: scale(1.2);
            }
        }
    }

    .selected{
        color: #000 !important;
        font-weight: 600;
    }
    
    .icon{
        color: #767676;
        font-size:28px;
    }

`

function Header() {
    return (
        <HeaderWrapper>
            <div id="header">
                <img src={Logo} alt='Logo' />
                <div id="menu">
                    <p className='selected'>Home</p>
                    <p>Our Product</p>
                    <p>FAQ</p>
                    <p>Contact US</p>
                </div>
                <FaUserCircle className='icon' />
            </div>
        </HeaderWrapper>
    )
}

export default Header
