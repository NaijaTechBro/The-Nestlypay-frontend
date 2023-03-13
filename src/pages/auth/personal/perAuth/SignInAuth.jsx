import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import faces from '../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import '../perAuth/signInAuth.css'
import {
  login,
  reset,
  sendLoginCode,
} from '../../../../features/auth/authSlice'
import Loading from '../../../../components/landingPage/loader/Loader'

const SignInAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const {
    user,
    isLoading,
    isError,
    isSuccess,
    message,
    twoFactor,
    isLoggedIn,
  } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError && twoFactor) {
      dispatch(sendLoginCode(email))
      navigate(`/loginWithCode/${email}`)
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/personal/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, twoFactor, email, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }
  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="sigininAuth-section">
      <div className="sigininAuth-section-left-container">
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
      </div>
      <div className="sigininAuth-section-right-container">
        <h1>Welcome Back!</h1>
        <p>pick up where you left.</p>
        <div className="sigininAuth-section-right-container-box">
          <div className="sigininAuth-section-right-containerbox-input">
            <form
              onSubmit={onSubmit}
              className="sigininAuth-section-right-containerbox-input-form"
            >
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                className="sigininAuth-section-right-containerbox-input-form_input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                className="sigininAuth-section-right-containerbox-input-form_input2"
              />
              <button
                type="submit"
                className="sigininAuth-section-right-containerbox-input-form_but"
              >
                Sign In
              </button>
            </form>
          </div>
          <h4>
            Don't Have an Account?{' '}
            <Link to="/personal/auth">
              <span>Create One</span>
            </Link>
          </h4>
          <Link to="/forgot-password">
            <p>forgot Password</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignInAuth
