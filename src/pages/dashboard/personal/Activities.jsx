import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import '../../styles/style'

function Activities() {
  return (
    <>
      <DashboardSideBar />
      <div className="activities--content">
        <DashboardHeader />

        <div className="activities--body">
          <p className="activities--t1">My Activities</p>
        </div>
        <div className="activities--item">
          <img
            src="images/nestlypay-lg.png"
            className="activities--img"
            alt="User"
          />
          <span className="activities--t2">Praise Dominic</span>
          <p className="activities--t3">You just added a client</p>
          <span className="activities--t4 w3-right">07-07-2022</span>
        </div>
        <div className="activities--item">
          <img
            src="images/nestlypay-lg.png"
            className="activities--img"
            alt="User"
          />
          <span className="activities--t2">Praise Dominic</span>
          <p className="activities--t3">You just created an invoice</p>
          <span className="activities--t4 w3-right">07-07-2022</span>
        </div>
      </div>
    </>
  )
}

export default Activities
