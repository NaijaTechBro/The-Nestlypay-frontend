import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import Profile_Update from '../../../components/dashboard/Profile_Update'
import '../../styles/style'

function Settings() {
  return (
    <>
      <DashboardSideBar thePage="profile" />
      <div className="profile">
        <DashboardHeader />
        <Profile_Update />
      </div>
    </>
  )
}

export default Settings
