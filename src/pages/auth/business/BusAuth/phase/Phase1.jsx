import React from 'react'
import faces from '../../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './phase1.css';

const Phase1 = () => {
  return (
    <div className='phase-section'>
    <div className='phase-section-left-container'>
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='phase-section-right-container'>
        <h1>Personal Information</h1>
        <p>Provide your legal name and work mail.
</p>
        <div className='phase-section-right-container-box'>
            <div className='phase-section-right-containerbox-input'>
            <form action="" className='phase-section-right-containerbox-input-form'>
            <input
        type="text"
        placeholder="First Name"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input"
        />
        <input
            type="Last Name"
            placeholder="Company Email"
            name=""
            id=""
            className='phase-section-right-containerbox-input-form_input2'
        />
        <input
        type="email"
        placeholder="Email Address"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input3"
        />
        </form>
        <Link to="/auth/phase2">
        <button
          className='phase1-section-right-containerbox-input-form_but'
          >
            Continue
          </button>
        </Link>
        </div>
      </div>
      </div>
      </div>

  )
}

export default Phase1