import React from 'react'
import Hero from '../Components/Hero'
import MySkill from '../Components/MySkill'
import Projeccts from '../Components/Projeccts'
import About from '../Components/About'
import ContactForm from '../Components/Contact'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <MySkill/>
      <section id='project'>
        <Projeccts/>
      </section>
      <section id='about'>
      <About/>
      </section>
      <section id='contact'>
      <ContactForm/>
      </section>
<Footer/>
    </div>
  )
}

export default Home