import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import faces from '../../../../assets/images/faces.png'
import { Link } from 'react-router-dom'
import './perAuth.css'
import { register, reset } from '../../../../features/auth/authSlice'
import Loading from '../../../../components/landingPage/loader/Loader'

const PerAuth = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/loginwithcode')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password || !name) {
      toast.error('Please input all fields')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="perauth-section">
      <div className="perauth-section-left-container">
        <img />
        <h1>Start taking steps to manage your business now.</h1>
        <img src={faces} alt="faces" />
        <p>Join 1,893 People.</p>
      </div>
      <div className="perauth-section-right-container">
        <h1>Create an Account</h1>
        <p>
          Tell us a bit about you. Provide your legal name, work mail and home
          address.
        </p>
        <div className="perauth-section-right-container-box">
          <div className="perauth-section-right-containerbox-input">
            <form
              onSubmit={onSubmit}
              className="perauth-section-right-containerbox-input-form"
            >
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
                value={name}
                onChange={onChange}
                className="perauth-section-right-containerbox-input-form_input"
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                id="email"
                value={email}
                onChange={onChange}
                className="perauth-section-right-containerbox-input-form_input2"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={onChange}
                className="perauth-section-right-containerbox-input-form_input3"
              />
              <button
                type="submit"
                className="perauth-section-right-containerbox-input-form_input4"
              >
                Create Now
              </button>
              {/* <Link>
            <h3>Already Have an Account? <span>Sign In</span></h3>
          </Link> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerAuth
