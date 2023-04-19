import React, { useRef } from 'react'
import HomePage from './HomePage/HomePage'
import HomeAbout from './HomeAbout'
import HomeMenu from './HomeMenu/HomeMenu'
import MenuList from './MenuList/MenuList'
import HomeForm from './HomeForm/HomeForm'
import AppFormInput from '../../components/AppFormInput/AppFormInput'

const Home = () => {
  
  return (
    <div>
        <HomePage indicators={false}  controls={true}/>
        <HomeAbout indicators={false} controls={true}/>
        <HomeMenu />
        <MenuList />
        <HomeForm />
        <AppFormInput />
    </div>
  )
}

export default Home