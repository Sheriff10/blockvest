import React from 'react'
import Footer from '../../components/Footer'
import Intro from './components/Intro'
import Offers from './components/Offers'
import Start from './components/Start'
import Stats from './components/Stats'

export default function Home() {
  return (
    <>
    <Intro />
    <Offers />
    <Stats />
    <Start />
    <Footer/>
    </>
  )
}
