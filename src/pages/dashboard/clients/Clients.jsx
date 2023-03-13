import React from 'react'
import DashboardSidebar from '../../../components/dashboard/DashboardSideBar'
import DashboardHeader from '../../../components/dashboard/DashboardHeader'
import ClientList from '../../../components/dashboard/ClientList'
import AddClient from './AddClients'
import InvoiceData from '../../../components/data/InvoiceData'
import { useState } from 'react'
import '../../styles/style'

function Clients() {
  const clientlist = InvoiceData.map((items) => {
    return (
      <ClientList
        key={items.invoice.details.id}
        name={items.invoice.details.toFullName}
        emailAddress={items.invoice.details.toEmailAddress}
        phoneNumber={items.invoice.details.toPhoneNumber}
      />
    )
  })

  const [addCLient, setAddClient] = useState(false)
  const openAddClient = () => {
    setAddClient((current) => !current)
  }

  return (
    <>
      <DashboardSidebar thePage="clients" />
      <div className="clients">
        <DashboardHeader />
        <p className="clients--table-t w3-animate-left">Clients</p>
        <button
          onClick={openAddClient}
          className="clients--btn1 w3-right w3-animate-right"
        >
          Add New Clients
        </button>
        <div className="clients--table--head">
          <table className="clients--table--head w3-animate-bottom">
            <tr>
              <th className="clients--th1">Name</th>
              <th>Email Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            {clientlist}
          </table>
        </div>

        {addCLient && <AddClient addBtn={openAddClient} />}
      </div>
    </>
  )
}

export default Clients
