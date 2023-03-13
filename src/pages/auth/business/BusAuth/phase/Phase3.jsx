import React from 'react'
import faces from '../../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './phase3.css'

const Phase3 = () => {
  return (
    <div className="phase3-section">
      <div className="phase3-section-left-container">
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
      </div>
      <div className="phase3-section-right-container">
        <h1>One Last Step</h1>
        <p>
          Avoid easily guessable password, and make sure it is easy to remember.
        </p>
        <div className="phase3-section-right-container-box">
          <div className="phase3-section-right-containerbox-input">
            <form
              action=""
              className="phase3-section-right-containerbox-input-form"
            >
              <input
                type="password"
                placeholder="Password"
                name=""
                id=""
                className="phase3-section-right-containerbox-input-form_input"
              />
              <input
                type="confirmpass"
                placeholder="Confirm Password"
                name=""
                id=""
                className="phase3-section-right-containerbox-input-form_input2"
              />
            </form>
            <Link to="/personal/dashboard">
              <button className="phase3-section-right-containerbox-input-form_but">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Phase3
