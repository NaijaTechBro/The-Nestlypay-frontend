import React from 'react'
import './authType.css'
import faces from '../../assets/images/faces.png'
import fire from '../../assets/images/fire.png'
import file from '../../assets/images/file.png'
import { Link } from 'react-router-dom'

const AuthType = () => {
    return (
    <div className='authtype-section'>
            <div className='authtype-section-left-container'>
                <img />
                <h1>Start taking steps to manage your business now.</h1>
                <img src={faces} alt="faces" />
                <p>Join 1,893 People.</p>
            </div>
            <div className='authtype-section-right-container'>
                <h1>Choose your account type</h1>
                <p>Get a downloadable receipts on every invoice payment as a reference to help your business in management and accounting.</p>
                <div className='authtype-section-right-container-box'>
                    <div className='authtype-section-right-containerbox-up'>
                        <Link to="/business/auth">
                        <button>
                            <img src={fire}/>
                        </button>
                        <h1>Business</h1>
                        <p>Create invoices as a business.</p>
                        </Link>
                    </div>
                    <div className='authtype-section-right-containerbox-down'>
                        <Link to="/personal/auth"> 
                    <button>
                            <img src={file} />
                        </button>
                        <h1>Personal</h1>
                        <p>Create a one-time invoice as a freelancer.</p>
                        </Link>
                        </div>
                </div>
            </div>
    </div>
    )
}

export default AuthType