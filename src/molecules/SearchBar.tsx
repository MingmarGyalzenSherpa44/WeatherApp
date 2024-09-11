import TextInput from '../atoms/TextInput'
import ImageWrapper from '../atoms/ImageWrapper'
import Image from '../atoms/Image'
import searchIcon from "../../public/icon/search.svg"
import { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'

interface ISearchBar {
  placeholder:string
}
export default function SearchBar(props:ISearchBar) {
  const {placeholder} = props;

  const weatherContext = useContext(WeatherContext);

  function handleChange(e:string){
    console.log(e)
    const value = e as string;
    // console.log(e.target);
    // console.log(weatherContext);
    // console.log(value);
    weatherContext?.setCityName(value);
    weatherContext?.fetchCityName(value);
    
  }
  
  return (
    <div className='search-bar'>
        <TextInput value={weatherContext!.cityName}  handleChange={handleChange} placeholder={placeholder} type={'text'}  />
        <ImageWrapper className='search-icon-wrapper'>
          <Image src={searchIcon} alt={""} />
        </ImageWrapper>
    </div>
  )
}
