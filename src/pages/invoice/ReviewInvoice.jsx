import React, { useRef } from 'react'
import Button from './InvoiceButton'
import jsPDF from 'jspdf'
import InvoiceData from '../../components/data/InvoiceData'
import '../styles/style'

function ReviewInvoice() {
  const reportTemplateRef = useRef(null)

  const urlAddress = window.location.pathname.split('/')
  console.log(urlAddress[2])

  const filterData = InvoiceData.filter((data) => {
    return data.invoice.details.id === urlAddress[2]
  })

  const undefinedData = () => {
    return (
      <div className="reviewinvoice--a">
        <div className="reviewinvoice" id="reviewinvoice">
          <header className="reviewinvoice--header">
            <img src="" className="reviewinvoice--img" alt="Logo" />
            <span className="reviewinvoice--t1 w3-right">
              <strong>Due Date</strong>:{' '}
            </span>
            <span className="reviewinvoice--t1 reviewinvoice--t1b w3-right">
              <strong>Issue Date</strong>:{' '}
            </span>
          </header>
          <div className="w3-row">
            <div className="w3-col l6 m6 s6 reviewinvoice--col1">
              <p className="reviewinvoice--t2">Billing From:</p>
              <br />
              <p className="reviewinvoice--t2"></p>
              <p className="reviewinvoice--t3"></p>
              <p className="reviewinvoice--t4"></p>
            </div>
            <div className="w3-col l6 m6 s6 reviewinvoice--col2">
              <p className="reviewinvoice--t2">Billing To:</p>
              <br />
              <p className="reviewinvoice--t2 reviewinvoice--t2b"></p>
              <p className="reviewinvoice--t3"></p>
              <p className="reviewinvoice--t4"></p>
            </div>
          </div>

          <table className="reviewinvoice--table">
            <tr className="reviewinvoice--tr1">
              <th className="reviewinvoice--th" colSpan="12">
                Cost Breakdown
              </th>
            </tr>
            <tr className="reviewinvoice--tr2">
              <th style={{ fontSize: '14px' }} className="reviewinvoice--td">
                Deliverable
              </th>
              <th style={{ fontSize: '14px' }} className="reviewinvoice--td">
                Item Description
              </th>
              <th style={{ fontSize: '14px' }} className="reviewinvoice--td">
                Quantity
              </th>
              <th style={{ fontSize: '14px' }} className="reviewinvoice--td">
                Cost
              </th>
            </tr>
            {/* {
              setItemList.map(data => {
                return(
                  <> */}
            <tr className="reviewinvoice--tr3">
              <td className="reviewinvoice--td"></td>
              <td className="reviewinvoice--td"></td>
              <td className="reviewinvoice--td"></td>
              <td className="reviewinvoice--td">$ </td>
            </tr>
            {/* </>
                )
              })
            } */}
          </table>

          <div className="w3-right reviewinvoice--box2">
            <p className="reviewinvoice--ttt1">
              Max Total <span className="reviewinvoice--ttt2 w3-right">$ </span>
            </p>
            <p className="reviewinvoice--ttt1">
              Sub <span className="reviewinvoice--ttt1 w3-right">$ </span>
            </p>
            <p className="reviewinvoice--ttt3">
              Total <span className="reviewinvoice--ttt3 w3-right">$ </span>
            </p>
          </div>

          {/* <div className="reviewinvoice--footer">
            <p className="reviewinvoice--f-t1 w3-left">Thanks for being a NestlyPay customer 😅</p>
            <p className="w3-right"><strong className="reviewinvoice--f-t2">Need Help?</strong><span className="reviewinvoice--f-t3">hello@nestlypay.co</span></p>
          </div> */}
        </div>
      </div>
    )
  }

  const newData = filterData.map((data) => {
    const handleGeneratePdf = () => {
      document
        .getElementById('reviewinvoice')
        .classList.add('reviewinvoice--extraStyle')
      setTimeout(() => {
        document
          .getElementById('reviewinvoice')
          .classList.remove('reviewinvoice--extraStyle')
      }, 10)
      const doc = new jsPDF({
        format: 'a4',
        unit: 'px',
      })

      // Adding the fonts.
      doc.setFont('Inter-Regular', 'normal')

      doc.html(reportTemplateRef.current, {
        async callback(doc) {
          await doc.save(data.invoice.details.id)
        },
      })
    }

    return (
      <>
        <div className="reviewinvoice--a">
          <div
            className="reviewinvoice"
            id="reviewinvoice"
            ref={reportTemplateRef}
          >
            <header className="reviewinvoice--header">
              <img
                src={data.invoice.details.logo}
                className="reviewinvoice--img"
                alt="Logo"
              />
              <span className="reviewinvoice--t1 w3-right">
                <strong>Due Date</strong>: {data.invoice.details.dueDate}
              </span>
              <span className="reviewinvoice--t1 reviewinvoice--t1b w3-right">
                <strong>Issue Date</strong>: {data.invoice.details.issueDate}
              </span>
            </header>
            <div className="w3-row">
              <div className="w3-col l6 m6 s6 reviewinvoice--col1">
                <p className="reviewinvoice--t2">Billing From:</p>
                <br />
                <p className="reviewinvoice--t2">
                  {data.invoice.details.fromFullName}
                </p>
                <p className="reviewinvoice--t3">
                  {data.invoice.details.fromEmailAddress}
                </p>
                <p className="reviewinvoice--t4">
                  {data.invoice.details.fromPhoneNumber}
                </p>
              </div>
              <div className="w3-col l6 m6 s6 reviewinvoice--col2">
                <p className="reviewinvoice--t2">Billing To:</p>
                <br />
                <p className="reviewinvoice--t2 reviewinvoice--t2b">
                  {data.invoice.details.toFullName}
                </p>
                <p className="reviewinvoice--t3">
                  {data.invoice.details.toEmailAddress}
                </p>
                <p className="reviewinvoice--t4">
                  {data.invoice.details.toPhoneNumber}
                </p>
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
                  <th
                    style={{ fontSize: '14px' }}
                    className="reviewinvoice--td"
                  >
                    Deliverable
                  </th>
                  <th
                    style={{ fontSize: '14px' }}
                    className="reviewinvoice--td"
                  >
                    Item Description
                  </th>
                  <th
                    style={{ fontSize: '14px' }}
                    className="reviewinvoice--td"
                  >
                    Quantity
                  </th>
                  <th
                    style={{ fontSize: '14px' }}
                    className="reviewinvoice--td"
                  >
                    Cost
                  </th>
                </tr>
                {data.invoice.items.map((data) => {
                  return (
                    <>
                      <tr className="reviewinvoice--tr3">
                        <td className="reviewinvoice--td">{data.itemName}</td>
                        <td className="reviewinvoice--td">
                          {data.itemDescription}
                        </td>
                        <td className="reviewinvoice--td">
                          {(data.itemQuantity * 1).toLocaleString('en-US')}
                        </td>
                        <td className="reviewinvoice--td">
                          $ {(data.itemAmount * 1).toLocaleString('en-US')}
                        </td>
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
                  ${' '}
                  {(data.invoice.price.totalPrice * 1).toLocaleString('en-US')}
                </span>
              </p>
              <p className="reviewinvoice--ttt1">
                Sub{' '}
                <span className="reviewinvoice--ttt1 w3-right">
                  $ {(data.invoice.price.tax * 1).toLocaleString('en-US')}
                </span>
              </p>
              <p className="reviewinvoice--ttt3">
                Total{' '}
                <span className="reviewinvoice--ttt3 w3-right">
                  ${' '}
                  {(
                    (+data.invoice.price.totalPrice + +data.invoice.price.tax) *
                    1
                  ).toLocaleString('en-US')}
                </span>
              </p>
            </div>

            {/* <div className="reviewinvoice--footer">
              <p className="reviewinvoice--f-t1 w3-left">Thanks for being a NestlyPay customer 😅</p>
              <p className="w3-right"><strong className="reviewinvoice--f-t2">Need Help?</strong><span className="reviewinvoice--f-t3">hello@nestlypay.co</span></p>
            </div> */}
          </div>
        </div>
        <Button
          key={data.invoice.id}
          id={data.invoice.id}
          invoiceID={data.invoice.details.id}
          issueDate={data.invoice.details.issueDate}
          dueDate={data.invoice.details.dueDate}
          fromFullName={data.invoice.details.fromFullName}
          fromEmailAddress={data.invoice.details.fromEmailAddress}
          fromPhoneNumber={data.invoice.details.fromPhoneNumber}
          toFullName={data.invoice.details.toFullName}
          toEmailAddress={data.invoice.details.toEmailAddress}
          toPhoneNumber={data.invoice.details.toPhoneNumber}
          totalPrice={data.invoice.price.totalPrice}
          sub={data.invoice.price.tax}
          items={data.invoice.items}
          downloadBtn={handleGeneratePdf}
        />
      </>
    )
  })

  return <>{filterData === 'undefined' ? undefinedData : newData}</>
}

export default ReviewInvoice
