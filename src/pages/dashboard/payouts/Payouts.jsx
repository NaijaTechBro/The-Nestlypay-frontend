import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import PayoutHistory from '../../../components/dashboard/PayoutHistory'
import '../../styles/style'

function Payouts() {
  return (
    <>
      <DashboardSideBar />
      <div className="payoutshistory">
        <DashboardHeader />
        <p className="clients--table-t">Payouts</p>
        <button className="clients--btn1 w3-right">Download CSV</button>
        <PayoutHistory />
      </div>
    </>
  )
}

export default Payouts
