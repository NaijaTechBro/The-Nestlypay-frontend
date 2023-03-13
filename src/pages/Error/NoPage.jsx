import React from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

function NoPage() {
  return (
    <>
      {!localStorage.getItem('isVerified') ||
      localStorage.getItem('isVerified') === 'false' ||
      !localStorage.getItem('token') ? (
        <Navigate to="../" />
      ) : (
        "Sorry We couldn't find this page!"
      )}
    </>
  )
}

export default NoPage
