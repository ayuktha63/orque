import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import TechStack from '../components/TechStack'
import ContactBanner from '../components/ContactBanner'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Orque Innovations | Custom Software Development & Scalable Tech</title>
        <meta name="description" content="Orque Innovations offers clean-code..." />
      </Helmet>

      <Header />
      <Hero />
      <Banner />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <ContactBanner />
      <Footer />
    </div>
  )
}

export default HomePage
