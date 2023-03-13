import React from 'react'
import faces from '../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './forgotPassword.css';

const ForgotPassword = () => {
    return (
    <div className='forgotpass-section'>
    <div className='forgotpass-section-left-container'>
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='forgotpass-section-right-container'>
        <h1>Forgot Password?</h1>
        <p>Did you forget your password ? Let’s help you reset it.</p>
        <div className='forgotpass-section-right-container-box'>
            <div className='forgotpass-section-right-containerbox-input'>
            <form action="" className='forgotpass-section-right-containerbox-input-form'>
            <input
            type="email"
            placeholder="Email Address"
            name=""
            id=""
            className='forgotpass-section-right-containerbox-input-form_input'
            />
            <button
            className='forgotpass-section-right-containerbox-input-form_but'
            >
            Get Reset Link
            </button>
            </form>
            </div>
            <h4><Link to="/account-type">Back to Sigin </Link></h4>
        </div>
    </div>
</div>
    )
}

export default ForgotPassword