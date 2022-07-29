import React from 'react'
import Featured from '../../components/featured/Featured'
import FeatutedProperties from '../../components/FeaturedProperties/FeatutedProperties'
import Header from '../../components/Header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/Property/PropertyList'
import './Home.css'
import Footer from '../../components/footer/Footer';
import { motion } from 'framer-motion';
import TextZone from '../../components/TextZone/TextZone';

function Home() {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 2.5}}
    exit={{opacity: 1 }}>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          
            <h1 className='homeTitle'>Browse by property type</h1>
            <PropertyList/>
            <h1 className='homeTitle'>Homes guests love</h1>
            <FeatutedProperties/>
            <TextZone/>
            <MailList/>
            <Footer/>
          
        </div>
    </motion.div>
  )
}

export default Home