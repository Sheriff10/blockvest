import React from 'react'
import Footer from '../../components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Start from './components/Start'
import Stats from './components/Stats'

export default function Home() {
  return (
    <>
    <Intro />
    <Stats />
    <Start />
    <Footer/>
    </>
  )
}
