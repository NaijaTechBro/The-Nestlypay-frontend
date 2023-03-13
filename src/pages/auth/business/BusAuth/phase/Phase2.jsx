import React from 'react'
import faces from '../../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './phase2.css';

const Phase2 = () => {
    return (
    <div className='phase-section'>
    <div className='phase-section-left-container'>
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
    </div>
    <div className='phase-section-right-container'>
        <h1>Business Information</h1>
        <p>Provide your business name, business mail and company address.</p>
        <div className='phase-section-right-container-box'>
            <div className='phase-section-right-containerbox-input'>
            <form action="" className='phase-section-right-containerbox-input-form'>
            <input
        type="text"
        placeholder="Company Name"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input"
        />
        <input
            type="email"
            placeholder="Company Email"
            name=""
            id=""
            className='phase-section-right-containerbox-input-form_input2'
        />
        <input
        type="text"
        placeholder="Address one"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input3"
        />
        <input
        type="text"
        placeholder="Address two"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input4"
        />
        <input
        type="text"
        placeholder="City"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input5"
        />
        <input
        type="text"
        placeholder="State"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input6"
        />
        <input
        type="text"
        placeholder="Zip Code"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input7"
        />       
        <input
        type="text"
        placeholder="Country"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input8"
        />
        <input
        type="url"
        placeholder="Website (Optional)"
        name=""
        id=""
        className="phase-section-right-containerbox-input-form_input9"
        />
        </form>
        <Link to="/auth/phase3">
        <button
        className='phase2-section-right-containerbox-input-form_but'
        >
            Continue
        </button>
        </Link>
        <Link to="/business/auth">
        <h3 className='phases-section-right-containerbox-input'>Already Have an Account? <span>Sign In</span></h3>
        </Link>
            </div>
        </div>
    </div>
</div>
)
}

export default Phase2