import React from 'react'
import './home.css'
import {
  Navbar,
  Header,
  Section,
  Article,
  Footer,
  Scrolls,
} from '../../components/'

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section />
      <Scrolls />
      <Article />
      <Footer />
    </div>
  )
}

export default Home
