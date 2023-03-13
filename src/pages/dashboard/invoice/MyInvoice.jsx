import React from 'react'
import { Link } from 'react-router-dom'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import ReviewInvoice1 from '../../../components/dashboard/ReviewInvoice1'
import InvoiceData from '../../../components/data/InvoiceData'
import { useState } from 'react'
import { useEffect } from 'react'
import '../../styles/style'

function MyInvoice() {
  const [noInvoice, setNoInvoice] = useState()

  const reviewinvoice = InvoiceData.map((data) => {
    return (
      <Link to={'/reviewinvoice/' + data.invoice.details.id}>
        <ReviewInvoice1
          key={data.invoice.id}
          issueDate={data.invoice.details.issueDate}
          dueDate={data.invoice.details.dueDate}
          fromFullName={data.invoice.details.fromFullName}
          fromEmailAddress={data.invoice.details.fromEmailAddress}
          fromPhoneNumber={data.invoice.details.fromPhoneNumber}
          toFullName={data.invoice.details.toFullName}
          toEmailAddress={data.invoice.details.toEmailAddress}
          toPhoneNumber={data.invoice.details.toPhoneNumber}
          totalPrice={data.invoice.price.totalPrice}
          items={data.invoice.items}
          sub={data.invoice.price.tax}
        />
      </Link>
    )
  })

  useEffect(() => {
    const showShow = () => {
      if (InvoiceData.length < 1) {
        setNoInvoice(
          <>
            <div id="noinvoice" className="myinvoice--body" align="center">
              <i className="myinvoice--icon fa-solid fa-file-circle-exclamation"></i>
              <p className="myinvoice--t1">
                Oops! You don’t have any invoice yet.
              </p>
              <Link to="/createinvoice" className="link">
                <p className="myinvoice--t2" style={{ cursor: 'pointer' }}>
                  Create one here.
                </p>
              </Link>
            </div>
          </>,
        )
      } else {
        setNoInvoice(
          <>
            <div className="myinvoice--body2" id="invoice">
              <p className="myinvoice--t3">My Invoices</p>
              <p className="myinvoice--t4">Recent Invoices</p>

              <div className="myinvoice--recent">
                {reviewinvoice}
                <Link to="/createinvoice" className="link">
                  <div className="myinvoice--add">
                    <i className="fa-solid fa-plus myinvoice--icon2"></i>
                  </div>
                </Link>
              </div>
            </div>
          </>,
        )
      }
    }

    showShow()
  }, [])

  return (
    <>
      <DashboardSideBar thePage="myInvoices" />
      <div className="myinvoice--content">
        <DashboardHeader />

        {noInvoice}
      </div>
    </>
  )
}

export default MyInvoice
