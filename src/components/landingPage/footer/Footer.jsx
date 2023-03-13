import React from 'react'
import './footer.css'
import face from '../../../assets/images/facebook.png'
import link from '../../../assets/images/linkedin.png'
import tweet from '../../../assets/images/twitter.png'
import ig from '../../../assets/images/instagram.png'
import logo from '../../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container_input">
        <div className="footer-container_input-image">
          <a href="" target="_blank">
            <img src={logo} className="footer-container_input-image" />
          </a>
          <a href="https://www.facebook.com/nestlypay" target="_blank">
            <img src={face} className="footer-container_input-image1" />
          </a>
          <a href="https://www.twitter.com/nestlypay" target="_blank">
            <img src={tweet} className="footer-container_input-image2" />
          </a>
          <a href="https://www.instagram.com/nestlypay" target="_blank">
            <img src={ig} className="footer-container_input-image3" />
          </a>
          <a href="https://www.linkedin.com/company/nestlypay">
            <img src={link} className="footer-container_input-image4" />
          </a>
        </div>
        <h3>help@nestlypay.co</h3>
        <p>© 2022. NestlyPay Limited All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
