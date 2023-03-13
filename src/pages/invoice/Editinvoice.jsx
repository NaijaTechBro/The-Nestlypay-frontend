import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShareInvoice from './ShareInvoice'
import ReviewInvoice2 from '../../components/dashboard/ReviewInvoice2'
import '../styles/style'

function EditInvoice() {
  const [theReview, setTheReview] = useState(false)
  const openTheReview = () => {
    setTheReview((current) => !current)
  }

  const [issueDate, setIssueDate] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [fullName, setFullName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [clientName, setClientName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [clientPhone, setClientPhone] = useState('')

  const [theImage, setImage] = useState()

  const [sub, setSub] = useState(0)

  // const [isSent, setIsSent] = useState(false);
  const [inputList, setInputList] = useState([
    { name: '', description: '', quantity: '', amount: '' },
  ])

  // const openShared = () => {
  //       setIsSent(current => !current);
  // };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const total = inputList.reduce((acc, prod) => {
    const muah = +acc + +prod.amount
    console.log(muah)
    return muah
  }, 0)

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { name: '', description: '', quantity: '', amount: '' },
    ])
  }

  console.log(JSON.stringify(inputList))

  // handle total input change
  const handleTotalChange = (e) => {
    e.preventDefault()
    console.log(
      issueDate,
      dueDate,
      fullName,
      emailAddress,
      phoneNumber,
      clientName,
      clientEmail,
      clientPhone,
    )

    localStorage.setItem('issueDate', issueDate)
    localStorage.setItem('dueDate', dueDate)
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('emailAddress', emailAddress)
    localStorage.setItem('phoneNumber', phoneNumber)
    localStorage.setItem('clientName', clientName)
    localStorage.setItem('clientEmail', clientEmail)
    localStorage.setItem('clientPhone', clientPhone)

    localStorage.setItem('sub', sub)
    localStorage.setItem('totalPrice', total)

    const totalWithSub = +total + +sub
    localStorage.setItem('totalWithSub', totalWithSub)

    localStorage.setItem('itemList', JSON.stringify(inputList))
  }

  /**
   * Create an arrow function that will be called when an image is selected.
   */
  const previewImage = (event) => {
    /**
     * Get the selected files.
     */
    const imageFiles = event.target.files
    /**
     * Count the number of files selected.
     */
    const imageFilesLength = imageFiles.length
    /**
     * If at least one image is selected, then proceed to display the preview.
     */
    if (imageFilesLength > 0) {
      /**
       * Get the image path.
       */
      const imageSrc = URL.createObjectURL(imageFiles[0])
      setImage(imageSrc)
      localStorage.setItem('thePic', imageSrc)

      setImageShow(
        <>
          <div className="w3-left editinvoice--box1">
            <label htmlFor="file-upload">
              <span className="fa fa-cloud-arrow-up editinvoice-icon1"></span>
            </label>
            <img src={imageSrc} className="editinvoice--upload-img" />
          </div>
          <input
            className="new-upload-input"
            type="file"
            id="file-upload"
            style={{ display: 'none' }}
            accept="image/*"
            onChange={previewImage}
          />
        </>,
      )
      document.querySelector('#remove-1').style.display = 'none'
      document.querySelector('#remove-2').style.display = 'none'
    }
  }

  const [imageShow, setImageShow] = useState(
    <>
      <div className="w3-left editinvoice--box1">
        <label htmlFor="file-upload1">
          <i
            className="fa fa-cloud-arrow-up editinvoice-icon1"
            id="remove-1"
          ></i>
        </label>
        <span className="editinvoice--tt1" id="remove-2">
          Upload Logo{' '}
          <span className="editinvoice--tt2">
            Recommended size 300x90 (png, jpg)
          </span>
        </span>
        <input
          type="file"
          id="file-upload1"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={previewImage}
        />
      </div>
    </>,
  )

  return (
    <>
      {/* {isSent && <ShareInvoice />} */}
      {theReview ? (
        <ReviewInvoice2
          theImageSrc={theImage}
          issueDate={issueDate}
          dueDate={dueDate}
          fromFullName={fullName}
          fromEmailAddress={emailAddress}
          fromPhoneNumber={phoneNumber}
          toFullName={clientName}
          toEmailAddress={clientEmail}
          toPhoneNumber={clientPhone}
          sub={sub}
          totalPrice={total}
          itemList={JSON.stringify(inputList)}
          closeTheReview={openTheReview}
          submit={handleTotalChange}
        />
      ) : (
        <div className="editinvoice">
          <header className="editinvoice--header">
            <div className="">
              <img
                src="/images/lg-unit.png"
                className="editinvoice--img"
                alt="NestlyPay"
              />
              <span className="editinvoice--t1">
                NestlyPay <br />
                <span className="editinvoice--t2">Simplifying Payment</span>
              </span>
            </div>
            <div className="w3-right right">
              <i className="fa-solid fa-user editinvoice--icon"></i>
            </div>
          </header>

          <div className="editinvoice--body">
            {imageShow}
            <div className="w3-right">
              <input
                type="text"
                className="editinvoice--input-date"
                placeholder="Issue Date"
                onChange={(e) => setIssueDate(e.target.value)}
                value={issueDate}
                onFocus={(e) => (e.target.type = 'date')}
              />
              <input
                type="text"
                className="editinvoice--input-date"
                placeholder="Due Date"
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate}
                onFocus={(e) => (e.target.type = 'date')}
              />
            </div>

            <div className="w3-row">
              <div className="w3-col l6 m6 s12">
                <p className="editinvoice--tt3">Bill From</p>
                <input
                  className="editinvoice--input-text"
                  placeholder="Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
                <input
                  className="editinvoice--input-text"
                  placeholder="Email Address"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  value={emailAddress}
                />
                <input
                  className="editinvoice--input-text"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>

              <div className="w3-col l6 m6 s12">
                <p className="editinvoice--tt3">Client Information</p>
                <input
                  className="editinvoice--input-text"
                  placeholder="Client Name or Company Name"
                  onChange={(e) => setClientName(e.target.value)}
                  value={clientName}
                />
                <input
                  className="editinvoice--input-text"
                  placeholder="Email Address"
                  onChange={(e) => setClientEmail(e.target.value)}
                  value={clientEmail}
                />
                <input
                  className="editinvoice--input-text"
                  placeholder="Phone Number"
                  onChange={(e) => setClientPhone(e.target.value)}
                  value={clientPhone}
                />
              </div>
            </div>

            <p className="editinvoice--tt3">
              Item Details
              <span
                style={{
                  fontWeight: '500',
                  fontSize: '14px',
                  position: 'relative',
                  top: '-2px',
                }}
              >
                {' '}
                | Sub :
                <input
                  style={{
                    marginLeft: '6px',
                    width: '44px',
                    borderRadius: '12px',
                    border: '1px solid #00000020',
                    padding: '0px 6px',
                  }}
                  placeholder="Sub"
                  onChange={(e) => setSub(e.target.value)}
                  value={sub}
                />
              </span>
            </p>

            {inputList.map((x, i) => {
              return (
                <>
                  <div className="editinvoice--i-t">
                    <input
                      className="editinvoice--input-text2"
                      placeholder="Item Name"
                      name="name"
                      value={x.name}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <input
                      className="editinvoice--input-text3"
                      placeholder="Item Description"
                      name="description"
                      value={x.description}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <input
                      className="editinvoice--input-text4"
                      placeholder="Quantity"
                      name="quantity"
                      value={x.quantity}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <input
                      className="editinvoice--input-text4"
                      placeholder="Amount"
                      name="amount"
                      value={x.amount}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </div>
                  {/* <div className="btn-box">  */}
                  {inputList.length !== 1 && (
                    <i
                      onClick={() => handleRemoveClick(i)}
                      className="editinvoice--icon2222 fa-solid fa-trash"
                      style={{ fontSize: '20px', color: '#0C46D3' }}
                    ></i>
                  )}
                  {inputList.length - 1 === i && (
                    <i
                      onClick={handleAddClick}
                      className="fa-solid fa-plus editinvoice--icon2 w3-right"
                    ></i>
                  )}
                  {/* </div> */}
                </>
              )
            })}

            <div className="w3-right editinvoice--box2">
              <p className="editinvoice--ttt1">
                Max Total{' '}
                <span className="editinvoice--ttt2 w3-right">
                  ${total.toLocaleString('en-US')}
                </span>
              </p>
              <p className="editinvoice--ttt1">
                Sub{' '}
                <span className="editinvoice--ttt1 w3-right">
                  ${(sub * 1).toLocaleString('en-US')}
                </span>
              </p>
              <p className="editinvoice--ttt3">
                Total{' '}
                <span className="editinvoice--ttt3 w3-right">
                  ${(+total + +sub).toLocaleString('en-US')}
                </span>
              </p>
            </div>

            <div className="w3-right">
              <button onClick={openTheReview} className="editinvoice--btn2-2">
                Preview
              </button>
              {/* <Link to="/reviewinvoice" className="link"><button onClick={handleTotalChange} className="editinvoice--btn2">Preview</button></Link> */}

              {/* <button onClick={openShared} className="editinvoice--btn2">Send Invoice</button> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditInvoice
