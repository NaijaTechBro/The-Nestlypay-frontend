import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import Home from './pages/Home/Home'
import AuthType from './pages/auth/AuthType'
import BusAuth from './pages/auth/business/BusAuth/Businessauth'
import PerAuth from './pages/auth/personal/perAuth/PerAuth'
import BusinessSignup from './pages/auth/business/BusAuth/BusinessSignup'
import Phase2 from './pages/auth/business/BusAuth/phase/Phase2'
import Phase1 from './pages/auth/business/BusAuth/phase/Phase1'
import Phase3 from './pages/auth/business/BusAuth/phase/Phase3'
import CreateAuth from './pages/auth/personal/perAuth/CreateAuth'
import Welcome from './pages/auth/personal/perAuth/Welcome'
import ForgotPassword from './pages/auth/ForgotPassword'
import SignInAuth from './pages/auth/personal/perAuth/SignInAuth'
import ResetPassword from './pages/auth/ResetPassword'
import LoginWithCode from './pages/auth/LoginwithCode'

import PersonalDashboard from './pages/dashboard/personal/PersonalDashboard'
import CreateInvoice from './pages/invoice/CreateInvoice'
import EditInvoice from './pages/invoice/EditInvoice'
import InvoiceSent from './pages/invoice/InvoiceSent'
import ReviewInvoice from './pages/invoice/ReviewInvoice'
import PaymentHistory from './pages/dashboard/personal/PaymentHistory'
import Activities from './pages/dashboard/personal/Activities'
import MyInvoice from './pages/dashboard/invoice/MyInvoice'
import InvoiceHistory from './pages/dashboard/invoice/InvoiceHistory'
import Clients from './pages/dashboard/clients/Clients'
import Payouts from './pages/dashboard/payouts/Payouts'
import Profile from './pages/dashboard/settings/Profile'
import Settings from './pages/dashboard/settings/Settings'
import NoPage from './pages/Error/NoPage'
import InvoiceData from './components/data/InvoiceData'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/account-type" element={<AuthType />} />
          <Route path="/business/auth" element={<BusAuth />} />
          <Route path="/personal/auth" element={<PerAuth />} />
          <Route path="/business/signup" element={<BusinessSignup />} />
          <Route path="/auth/phase2" element={<Phase2 />} />
          <Route path="/auth/phase1" element={<Phase1 />} />
          <Route path="/auth/phase3" element={<Phase3 />} />
          <Route path="/create-free-invoice" element={<CreateAuth />} />
          <Route path="/personal/signin" element={<Welcome />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signin" element={<SignInAuth />} />
          <Route path="/loginwithcode" element={<LoginWithCode />} />

          {/* Dashboard */}
          <Route path="/personal/dashboard" element={<PersonalDashboard />} />

          {/* Invoice Routes */}
          <Route exact path="/createinvoice" element={<CreateInvoice />} />
          {InvoiceData.map((data) => {
            return (
              <>
                <Route
                  path={'/editinvoice/' + data.invoice.details.id}
                  element={<EditInvoice theID={data.invoice.details.id} />}
                />
                <Route
                  path={'/reviewinvoice/' + data.invoice.details.id}
                  element={<ReviewInvoice />}
                />
                <Route exact path="/editinvoice" element={<NoPage />} />
                <Route exact path="/reviewinvoice" element={<NoPage />} />
              </>
            )
          })}
          <Route exact path="/invoicesent" element={<InvoiceSent />} />
          <Route exact path="/reviewinvoice" element={<ReviewInvoice />} />
          <Route
            exact
            path="/personal/dashboard"
            element={<PersonalDashboard />}
          />
          <Route exact path="/paymenthistory" element={<PaymentHistory />} />
          <Route exact path="/activities" element={<Activities />} />
          <Route exact path="/myinvoice" element={<MyInvoice />} />
          <Route exact path="/invoicehistory" element={<InvoiceHistory />} />
          <Route exact path="/clients" element={<Clients />} />
          <Route exact path="/payouts" element={<Payouts />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
