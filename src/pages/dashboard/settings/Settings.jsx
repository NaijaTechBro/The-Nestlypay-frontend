import React from 'react'
import DashboardSideBar from '../../../components/dashboard/DashboardSidebar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import Settings_Update from '../../../components/dashboard/Settings_Update'
import '../../styles/style'

function Settings() {
  return (
    <>
      <DashboardSideBar thePage="settings" />
      <div className="settings">
        <DashboardHeader />
        <p className="settings-t w3-animate-left">Account Settings</p>
        <Settings_Update />
      </div>
    </>
  )
}

export default Settings
