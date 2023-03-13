import React from 'react'
import { useState } from 'react'
import RemoveClient from '../../pages/dashboard/clients/RemoveClients'
import EditClient from '../../pages/dashboard/clients/EditClients'
import '../styles/style'

function ClientList(props) {
  const [removeCLient, setRemoveClient] = useState(false)
  const openRemoveClient = () => {
    setRemoveClient((current) => !current)
  }

  const [editClient, setEditclient] = useState(false)
  const openEditclient = () => {
    setEditclient((current) => !current)
  }

  return (
    <>
      <tr>
        <td>
          <span className="clients--icons">
            <i className="fa-solid fa-house clients--icon"></i>
          </span>
          {props.name}
        </td>
        <td>{props.emailAddress}</td>
        <td>{props.phoneNumber}</td>
        <td>
          <span className="clients--edit" onClick={openEditclient}>
            <i className="fa-regular fa-pen-to-square"></i>
          </span>
          <span className="clients--delete" onClick={openRemoveClient}>
            <i className="fa-regular fa-trash-can"></i>
          </span>
        </td>
      </tr>
      {removeCLient && (
        <RemoveClient
          name={props.name}
          emailAddress={props.emailAddress}
          phoneNumber={props.phoneNumber}
          removeBtn={openRemoveClient}
        />
      )}

      {editClient && (
        <EditClient
          name={props.name}
          emailAddress={props.emailAddress}
          phoneNumber={props.phoneNumber}
          editBtn={openEditclient}
        />
      )}
    </>
  )
}

export default ClientList
