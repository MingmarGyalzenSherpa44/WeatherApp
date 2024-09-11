import React, { useContext } from 'react'
import ImageWrapper from '../atoms/ImageWrapper'
import Image from '../atoms/Image'
import logo from "../../public/images/logo.svg"
import SearchBar from '../molecules/SearchBar'
import Suggestions from './Suggestions'
import { WeatherContext } from '../contexts/WeatherContext'
export default function Header() {

  const weatherContext = useContext(WeatherContext);
  return (
    <div className='header container'>
        <ImageWrapper className='logo-wrapper'>
            <Image src={logo} alt='' />
        </ImageWrapper>
        <div>
        <SearchBar  placeholder="Search Location..."/>
          <Suggestions className={'suggestions'} suggestions={weatherContext!.locationSuggestions} />
        </div>
    </div>
  )
}
