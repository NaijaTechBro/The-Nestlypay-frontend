import React from 'react'
import '../styles/style'

function PayoutHistory() {
  return (
    <>
      <table className="payoutshistory--table">
        <tr>
          <th className="payoutshistory--th1">Transaction</th>
          <th>Receipt ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>
            <span className="payoutshistory--icons">
              <i className="fa-solid fa-house payoutshistory--icon"></i>
            </span>
            Withdrawal to Ayo John
          </td>
          <td>PAYNES/837/e38</td>
          <td>₦39,000.00</td>
          <td>07/07/2022</td>
          <td>
            <span className="payoutshistory--pending">Pending</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="payoutshistory--icons">
              <i className="fa-solid fa-house payoutshistory--icon"></i>
            </span>
            Withdrawal to Dominic
          </td>
          <td>PAYNES/837/e38</td>
          <td>₦39,000.00</td>
          <td>07/07/2022</td>
          <td>
            <span className="payoutshistory--success">Success</span>
          </td>
        </tr>
        <tr>
          <td>
            <span className="payoutshistory--icons">
              <i className="fa-solid fa-house payoutshistory--icon"></i>
            </span>{' '}
            Withdrawal to Cliford
          </td>
          <td>PAYNES/837/e38</td>
          <td>₦39,000.00</td>
          <td>07/07/2022</td>
          <td>
            <span className="payoutshistory--cancelled">Cancelled</span>
          </td>
        </tr>
      </table>
    </>
  )
}

export default PayoutHistory
