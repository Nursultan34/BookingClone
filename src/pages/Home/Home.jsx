import React from 'react'
import Featured from '../../components/featured/Featured'
import FeatutedProperties from '../../components/FeaturedProperties/FeatutedProperties'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/Property/PropertyList'
import './Home.css'
import Footer from '../../components/footer/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          
            <h1 className='homeTitle'>Browse by property type</h1>
            <PropertyList/>
            <h1 className='homeTitle'>Homes guests love</h1>
            <FeatutedProperties/>
            <MailList/>
            <Footer/>
          
        </div>
    </div>
  )
}

export default Home