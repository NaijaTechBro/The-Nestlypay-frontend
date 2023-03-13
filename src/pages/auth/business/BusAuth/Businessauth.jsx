import React from 'react'
import faces from '../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './businessAuth.css';

const BusinessAuth = () => {
  return (
    <div className='businessAuth-section'>
    <div className='businessAuth-section-left-container'>
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='businessAuth-section-right-container'>
        <h1>Welcome Back!</h1>
        <p>pick up where you left.</p>
        <div className='businessAuth-section-right-container-box'>
            <div className='businessAuth-section-right-containerbox-input'>
            <form action="" className='businessAuth-section-right-containerbox-input-form'>
          <input
            type="email"
            placeholder="Email Address"
            name=""
            id=""
            className='businessAuth-section-right-containerbox-input-form_input'
          />
            <input
            type="password"
            placeholder="Password"
            name=""
            id=""
            className='businessAuth-section-right-containerbox-input-form_input2'
          />
          <button
          className='businessAuth-section-right-containerbox-input-form_but'
          >
            Sign In
          </button>
          </form>
            </div>
            <h4>Don't Have an Account? <Link to="/business/signup"><span>Create One</span></Link></h4>
            <Link to="/forgot-password"><p>forgot Password</p></Link>
        </div>
    </div>
</div>
  )
}

export default BusinessAuth
