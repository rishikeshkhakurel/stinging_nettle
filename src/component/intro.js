import React from 'react'
import MainImg from '../assets/main.png'
import styled from 'styled-components'

const IntroWrapper = styled.div`
display:flex;
width: 90%;
margin: auto;
height:100vh;

#intro-left{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 40%;
    #slogan{
        font-size: 54px;     
    }
    #main-text{
        font-size: 24px;
        margin: 32px 0;
    }
    button{
        background: #2D6A4F;
        font-size: 18px;
        padding: 8px 32px;
        border: none;
        border-radius: 20px;
        color: white;
        cursor: pointer;
    }
}

#intro-right{
    width: 60%;
    display: flex;
    justify-content: center;
}
    img{
        height: 70vh;
        margin-top: 10vh;
    }

`
function Intro() {
    return (
        <IntroWrapper>
            <div id="intro-left">
                <p id="slogan"><strong>Healthier</strong> and <strong>Happier</strong> Life with Stinging Nettle</p>
                <p id="main-text">Boost your Immune with our product. 100% genuine product with world wide delivery</p>
                <div>
                    <button>Shop Now</button>
                </div>
            </div>
            <div id="intro-right">

                <img src={MainImg} alt='MainImg' />
            </div>

        </IntroWrapper>
    )
}

export default Intro
