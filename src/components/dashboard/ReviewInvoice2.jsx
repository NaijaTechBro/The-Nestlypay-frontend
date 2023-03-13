import React from 'react'
import '../styles/style'

function ReviewInvoice2(props) {
  return (
    <>
      <div className="reviewinvoice--a" style={{ marginBottom: '50px' }}>
        <p style={{ textAlign: 'center', marginBottom: '24px' }}>
          This is a preview of your invoice. Are you sure you want to Save?
        </p>
        <div
          className="reviewinvoice"
          id="reviewinvoice"
          style={{ display: 'block' }}
        >
          <header className="reviewinvoice--header">
            <img
              src={props.theImageSrc}
              className="reviewinvoice--img"
              alt="Logo"
            />
            <span className="reviewinvoice--t1 w3-right">
              <strong>Due Date</strong>: {props.issueDate}
            </span>
            <span className="reviewinvoice--t1 w3-right">
              <strong>Issue Date</strong>:{props.dueDate}
            </span>
          </header>
          <div className="w3-row">
            <div className="w3-col l6 reviewinvoice--col1">
              <p className="reviewinvoice--t2">Billing From:</p>
              <br />
              <p className="reviewinvoice--t2">{props.fromFullName}</p>
              <p className="reviewinvoice--t3">{props.fromEmailAddress}</p>
              <p className="reviewinvoice--t4">{props.fromPhoneNumber}</p>
            </div>
            <div className="w3-col l6 reviewinvoice--col2">
              <p className="reviewinvoice--t2">Billing To:</p>
              <br />
              <p className="reviewinvoice--t2">{props.toFullName}</p>
              <p className="reviewinvoice--t3">{props.toEmailAddress}</p>
              <p className="reviewinvoice--t4">{props.toPhoneNumber}</p>
            </div>
          </div>

          <div style={{ overflow: 'scroll' }}>
            <table className="reviewinvoice--table">
              <tr className="reviewinvoice--tr1">
                <th className="reviewinvoice--th" colSpan="12">
                  Cost Breakdown
                </th>
              </tr>
              <tr className="reviewinvoice--tr2">
                <td className="reviewinvoice--td">Deliverable</td>
                <td className="reviewinvoice--td">Item Description</td>
                <td className="reviewinvoice--td">Quantity</td>
                <td className="reviewinvoice--td">Cost</td>
              </tr>
              {JSON.parse(props.itemList).map((data) => {
                return (
                  <>
                    <tr className="reviewinvoice--tr3">
                      <td className="reviewinvoice--td">{data.name}</td>
                      <td className="reviewinvoice--td">{data.description}</td>
                      <td className="reviewinvoice--td">{data.quantity}</td>
                      <td className="reviewinvoice--td">${data.amount}</td>
                    </tr>
                  </>
                )
              })}
            </table>
          </div>

          <div className="w3-right reviewinvoice--box2">
            <p className="reviewinvoice--ttt1">
              Max Total{' '}
              <span className="reviewinvoice--ttt2 w3-right">
                ${(props.totalPrice * 1).toLocaleString('en-US')}
              </span>
            </p>
            <p className="reviewinvoice--ttt1">
              Sub{' '}
              <span className="reviewinvoice--ttt1 w3-right">
                ${(props.sub * 1).toLocaleString('en-US')}
              </span>
            </p>
            <p className="reviewinvoice--ttt3">
              Total{' '}
              <span className="reviewinvoice--ttt3 w3-right">
                ${(+props.totalPrice + +props.sub).toLocaleString('en-US')}
              </span>
            </p>
          </div>

          {/* <div className="reviewinvoice--footer">
              <p className="reviewinvoice--f-t1 w3-left">Thanks for being a NestlyPay customer 😅</p>
              <p className="w3-right"><strong className="reviewinvoice--f-t2">Need Help?</strong><span className="reviewinvoice--f-t3">hello@nestlypay.co</span></p>
            </div> */}
        </div>
        <div
          style={{
            position: 'relative',
            top: '-230px',
            left: '-50px',
            marginBottom: '80px',
          }}
        >
          <button onClick={props.closeTheReview} className="editinvoice--btn1">
            Edit Invoice
          </button>
          <button onClick={props.submit} className="editinvoice--btn2">
            Save Invoice
          </button>
        </div>
      </div>
    </>
  )
}

export default ReviewInvoice2
