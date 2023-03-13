import React from 'react'
import './article.css'
import main from '../../../assets/images/main.png'
import mobile from '../../../assets/images/mobile.png'
import { Link } from 'react-router-dom'

function Article() {
  return (
    <div className="article-container">
      <div className="article-container_input">
        <h1>Ready to Grow Your Business in One Solution?</h1>
        <p>
          Say hello to Nestlypay, a platform that enables you to send
          professional invoices, save time, digitalize your bills and manage
          your business in minutes.
        </p>
        <Link to="/account-type">
          <button>Get Started</button>
        </Link>

        <img
          src={main}
          alt="main"
          className="article-container_input-img_first"
        />
        <img
          src={mobile}
          alt="mobile"
          className="article-container_input-img_last"
        />
      </div>
    </div>
  )
}

export default Article
