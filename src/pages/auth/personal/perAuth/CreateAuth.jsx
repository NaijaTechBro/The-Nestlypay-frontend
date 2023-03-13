import React from 'react'
import faces from '../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './createAuth.css';

const CreateAuth = () => {
    return (
    <div className='createauth-section'>
    <div className='createauth-section-left-container'>
        <img />
        <h1>Are you a Freelancer? <br />Create a one time free invoice without signing in</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='createauth-section-right-container'>
        <h1>Create free Invoice</h1>
        <p>Create a one time free invoice without signing up.</p>
        <div className='createauth-section-right-container-box'>
            <div className='createauth-section-right-containerbox-input'>
            <form action="" className='createauth-section-right-containerbox-input-form'>
            <input
            type="text"
            placeholder="Full Name"
            name=""
            id=""
            className='createauth-section-right-containerbox-input-form_input'
            />
            <input
            type="email"
            placeholder="Email Address"
            name=""
            id=""
            className='createauth-section-right-containerbox-input-form_input2'
            />
            <button
            className='createauth-section-right-containerbox-input-form_input4'
            >
            Create Now
            </button>
            </form>
            <h4>Already Have an Account? <Link to="/personal/signin"><span>Sign In</span></Link></h4>
            </div>
        </div>
    </div>
</div>
    )
}

export default CreateAuth