import React from 'react'
import { useState } from 'react'
import '../styles/style'

function Settings_Update() {
  const [state1, setState1] = useState(true)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)

  const overview = () => {
    setState1(true)
    setState2(false)
    setState3(false)
    setState4(false)

    document.getElementById('overview').style.display = 'block'
    document.getElementById('account').style.display = 'none'
    document.getElementById('security').style.display = 'none'
    document.getElementById('preference').style.display = 'none'
  }

  const account = () => {
    setState1(false)
    setState2(true)
    setState3(false)
    setState4(false)

    document.getElementById('overview').style.display = 'none'
    document.getElementById('account').style.display = 'block'
    document.getElementById('security').style.display = 'none'
    document.getElementById('preference').style.display = 'none'
  }

  const security = () => {
    setState1(false)
    setState2(false)
    setState3(true)
    setState4(false)

    document.getElementById('overview').style.display = 'none'
    document.getElementById('account').style.display = 'none'
    document.getElementById('security').style.display = 'block'
    document.getElementById('preference').style.display = 'none'
  }

  const preference = () => {
    setState1(false)
    setState2(false)
    setState3(false)
    setState4(true)

    document.getElementById('overview').style.display = 'none'
    document.getElementById('account').style.display = 'none'
    document.getElementById('security').style.display = 'none'
    document.getElementById('preference').style.display = 'block'
  }

  return (
    <>
      <div className="settings--nav w3-animate-right">
        {state1 ? (
          <button className="settings--nav-item-focused" onClick={overview}>
            Overview
          </button>
        ) : (
          <button className="s-n-i settings--nav-item" onClick={overview}>
            Overview
          </button>
        )}

        {state2 ? (
          <button className="settings--nav-item-focused" onClick={account}>
            Account
          </button>
        ) : (
          <button className="s-n-i settings--nav-item" onClick={account}>
            Account
          </button>
        )}

        {state3 ? (
          <button className="settings--nav-item-focused" onClick={security}>
            Security
          </button>
        ) : (
          <button className="s-n-i settings--nav-item" onClick={security}>
            Security
          </button>
        )}

        {state4 ? (
          <button className="settings--nav-item-focused" onClick={preference}>
            Preference
          </button>
        ) : (
          <button className="s-n-i settings--nav-item" onClick={preference}>
            Preference
          </button>
        )}
      </div>

      <div className="settings--div w3-animate-bottom" id="overview">
        <p className="settings--t1">Contact Information</p>
        <p className="settings--t2">
          Provide your legal name, home address and work mail.
        </p>
        <input className="settings--input1" placeholder="Email Address" />
        <input className="settings--input1" placeholder="Home Address" />
        <div className="settings--input2-set">
          <input className="settings--input2" placeholder="City" />
          <input className="settings--input2 w3-right" placeholder="State" />
        </div>
        <div className="settings--input2-set">
          <input className="settings--input2" placeholder="Postal Code" />
          <select className="settings--input2 w3-right">
            <option value="volvo">Select Country</option>
            <option value="saab">Arabia</option>
            <option value="fiat">Habibi</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button className="settings--btn">Update</button>
      </div>

      <div className="settings--div w3-animate-bottom" id="account">
        <p className="settings--t1">Banking Info</p>
        <p className="settings--t2">
          The name on your bank account should be the same as the one you filled
          in to ensure easy validation.
        </p>
        <input className="settings--input1" placeholder="Bank Name" />
        <input className="settings--input1" placeholder="Account Number" />
        <input className="settings--input1" placeholder="Account Name" />
        <button className="settings--btn">Update</button>
      </div>

      <div className="settings--div w3-animate-bottom" id="security">
        <p className="settings--t1">Security Setup</p>
        <p className="settings--t2">
          Avoid using easily guessable password, and make sure it is easy to
          remember.
        </p>
        <input className="settings--input1" placeholder="Old Password" />
        <input className="settings--input1" placeholder="New Password" />
        <input className="settings--input1" placeholder="Confirm Password" />
        <button className="settings--btn">Update</button>
      </div>

      <div className="settings--div w3-animate-bottom" id="preference">
        <p className="settings--t1">Payments Preference</p>
        <p className="settings--t2">Accept Payments Via</p>
        <div className="settings--input--2">
          <label className="settings--t3">Bank Transfer</label>
          <input type="checkbox" className="settings--input-box" />
          <label className="settings--t3">Crypto Currency</label>
          <input type="checkbox" className="settings--input-box" />
        </div>
        <div className="settings--input--2">
          <p className="settings--t4">Transfer Receipt</p>
          <input type="checkbox" className="settings--input-box2" />
          <label className="settings--t3b">Send to me</label>
          <input type="checkbox" className="settings--input-box2" />
          <label className="settings--t3b">Send to customer</label>
        </div>
        <button className="settings--btn">Update</button>
      </div>
    </>
  )
}

export default Settings_Update
