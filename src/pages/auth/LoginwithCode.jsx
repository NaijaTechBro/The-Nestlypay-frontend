import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import {
  loginWithCode,
  reset,
  sendLoginCode,
} from '../../features/auth/authSlice'
import Loading from '../../components/landingPage/loader/Loader'

const LoginwithCode = () => {
  const [loginCode, setLoginCode] = useState('')
  const { email } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  )

  const sendUserLoginCode = async () => {
    await dispatch(sendLoginCode(email))
    await dispatch(reset())
  }

  const loginUserWithCode = async (e) => {
    e.preventDefault()
    if (loginCode === '') {
      return toast.error('Please fill in login access code')
    }
    if (loginCode.length !== 6) {
      return toast.error('Access code must be 6 characters digit')
    }
    const code = {
      loginCode,
    }
    await dispatch(loginWithCode({ code, email }))
    await dispatch(reset())
  }

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/personal/dashboard')
    }
    dispatch(reset())
  }, [navigate, dispatch, isSuccess])
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/personal/dashboard')
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

    if (!loginCode) {
      toast.error('Please input Access Code')
    } else {
      const userData = {
        loginCode,
      }

      dispatch(loginWithCode(userData))
    }
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="perauth-section">
      {isLoading && <Loading />}
      <div className="">
        <div className="perauth-section-right-containerbox-input-form"></div>
        <h2>Enter Access Code</h2>

        <form onSubmit={loginUserWithCode}>
          <input
            type="text"
            placeholder="Access Code"
            required
            name="accessCode"
            value={loginCode}
            onChange={(e) => setLoginCode(e.target.value)}
          />

          <button type="submit" className="--btn --btn-primary --btn-block">
            Proceed To Login
          </button>
          <span className="--flex-center">
            Check your email for login access code
          </span>
          <div className="">
            <p>
              s<Link to="/">- Home</Link>
            </p>
            <p onClick={sendUserLoginCode} className="v-link">
              <b> Resend Code</b>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginwithCode
