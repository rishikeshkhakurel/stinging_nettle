import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
width: 90%;
margin: auto;
margin-bottom: 6vh;
height:70vh;
#heading{
    margin-top: 6vh;
    text-align:center;
    font-size: 32px;
    margin-bottom: 64px;
}

#contact-details{
    display:flex;
    iframe{
        width: 50%;
    }
    
    #contact-form{
        width: 45%;
        margin-left:5%;
        input, textarea {
            margin-top: 16px;
            padding: 12px 16px;
            background: transparent;
            outline: 0;
            width: 90%;
            border: 1px solid #2D6A4F;
        }

        input{
            margin-right: 16px;
        }

        button{
            background: #2D6A4F;
            font-size: 18px;
            padding: 8px 32px;
            border: none;
            border-radius: 8px;
            color: white;
            cursor: pointer;
            margin-top: 16px;
        }

    }
}

`


function Contact() {
    return (
        <ContactWrapper>
            <p id='heading'>Contact Us</p>
            <div id="contact-details">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14127.826405811606!2d85.315442!3d27.7186262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e71103585d%3A0xc68400611ed4b8ce!2sNational%20College%20of%20Food%20Science%20and%20Technology%20NIST!5e0!3m2!1sen!2snp!4v1706895316273!5m2!1sen!2snp" title='map' width="800" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div id="contact-form">
                    <form>
                        <input type="text" name="FullName" placeholder='ENTER YOUR NAME*' />
                        <input type="email" name="Email" placeholder='ENTER YOUR EMAIL* ' />
                        <textarea type="text" name="Message" placeholder='YOUR MESSAGE * ' rows="10" cols="100" />
                        <div id="button-div">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </ContactWrapper>
    )
}

export default Contact
