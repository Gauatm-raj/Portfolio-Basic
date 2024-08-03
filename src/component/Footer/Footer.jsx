import React from 'react'
import "./footer.css"
import footer_logo from "../../assets/footer_logo.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
  return (
    <>
     <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Gautam</h1>
                <p>
As a Java Full Stack Developer, I'll master both front-end and back-end development, creating seamless web applications. This role offers freshers a chance to work with Java, HTML, CSS, and JavaScript, gaining versatile skills and experience in building robust, user-friendly software solutions in the dynamic tech industry.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="footer-subscribe">ADD</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <div className="footer-bottom-left">
                <p>© 2024 Gautam Raj. All rights reserved.</p>
            </div>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy policy</p>
                <p>Contact with me</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default Footer