import React from 'react'
import faces from '../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './resetPassword.css'

const ResetPassword = () => {
  return (
    <div className='resetpass-section'>
    <div className='resetpass-section-left-container'>
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='resetpass-section-right-container'>
        <h1>Reset Password</h1>
        <div className='resetpass-section-right-container-box'>
            <div className='resetpass-section-right-containerbox-input'>
            <form action="" className='resetpass-section-right-containerbox-input-form'>
            <input
            type="password"
            placeholder="New Password"
            name=""
            id=""
            className='resetpass-section-right-containerbox-input-form_input'
            />
            <input
            type="password"
            placeholder="Confirm Password"
            name=""
            id=""
            className='resetpass-section-right-containerbox-input-form_input2'
            />
            <button
            className='resetpass-section-right-containerbox-input-form_but'
            >
            Update
            </button>
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default ResetPassword