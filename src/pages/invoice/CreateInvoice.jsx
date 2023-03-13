import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/style'
import axios from '../../api/axios'

const CREATE_URL = '/invoice/create'

// <p className="createinvoice--t4">Create New</p>
// Look for the above code. Add the function of onCLick={createNewInvoice}
// before executing the function in js, make sure the loader stays till execution is successful...
// in the function, post to the API, and use the .then(response => {
//                                                  const openID = response.data.id
//                                                  window.location.href = {"localhost:3000/editinvoice/" + openID}
//                                                  })

function CreateInvoice() {
  const [theIcon, setTheIcon] = useState(
    <i className="fa-solid fa-plus createinvoice--icon2"></i>,
  )

  const [errMsg, setErrMsg] = useState()
  const [successMsg, setSuccessMsg] = useState()
  const [success, setSuccess] = useState(false)

  const handleCreate = async () => {
    setTheIcon(
      <>
        <span className="loader--for-create"></span>
      </>,
    )
    const theToken = localStorage.getItem('token')
    await axios
      .post(
        CREATE_URL,
        {},
        {
          headers: {
            Authorization: `Bearer ${theToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': 'https://nestlypay.vercel.app',
          },
          withCredentials: true,
        },
      )
      .then(
        (response) => {
          setSuccess(true)
          setSuccessMsg('Invoice Created')
          console.log(response)
          setTheIcon(<i className="fa-solid fa-plus createinvoice--icon2"></i>)
          const theInvoiceID = response?.data?._id
          localStorage.setItem('theInvoiceID', theInvoiceID)
        },
        (err) => {
          console.log(err)
          setSuccess(false)
          setErrMsg(err?.response?.data?.message)
          setTheIcon(<i className="fa-solid fa-plus createinvoice--icon2"></i>)
        },
      )
  }

  return (
    <>
      <div className="createinvoice">
        <header className="createinvoice--header">
          <div className="">
            <img
              src="images/lg-unit.png"
              className="createinvoice--img"
              alt="NestlyPay"
            />
            <span className="createinvoice--t1">
              NestlyPay <br />
              <span className="createinvoice--t2">Simplifying Payment</span>
            </span>
          </div>
          <div className="w3-right right">
            <i className="fa-solid fa-user createinvoice--icon"></i>
          </div>
        </header>

        <div className="createinvoice--body">
          <p className="createinvoice--t3">Invoice Models</p>
          {/* <Link className="link" to="/editinvoice"><div className="createinvoice--add">
                    {theIcon}
                </div></Link> */}
          <div onClick={handleCreate} className="createinvoice--add">
            {theIcon}
          </div>
          <p className="createinvoice--t4">Create New</p>
        </div>
      </div>
    </>
  )
}

export default CreateInvoice
