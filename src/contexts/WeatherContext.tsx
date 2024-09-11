import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IWeather } from '../interfaces/IWeather';
import { config } from '../../config';
import axios from 'axios';
import { ILocation } from '../interfaces/ILocation';

interface IWeatherContext  {
    fetchWeatherData:(city:string)=>void;
    fetchCityName:(location:string)=>void;
    weatherData:IWeather,
    locationSuggestions:ILocation[],
    setLocationSuggestions:Dispatch<SetStateAction<never[]>>,
    cityName:string,
    setCityName:Dispatch<SetStateAction<string>>,
    
}

const initialValue = {
    location: { name: "", localtime: "" },
    current: {
      temp_c: "",
      temp_f: "",
      condition: { text: "", icon: "", code: "" },
      wind_kph: "",
      wind_mph: "",
      cloud: "",
      humidity: "",
    }
}

export const WeatherContext = createContext<IWeatherContext | null>(null);

export default function WeatherProvider({children}) {
    const [weatherData,setWeatherData] = useState<IWeather>(initialValue);
    // const [location, setLocation] = useState("");
    const [locationSuggestions,setLocationSuggestions] = useState([]);
    const [cityName,setCityName] = useState("");
    const apiKey = config.api.key;

    const fetchWeatherData = async (city:string) => {
        try{
            const response = await axios.get<IWeather>(
                `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
              );
              console.log(response);


              setWeatherData(response.data);
        }catch(err:any)
{
    console.log(err)
}  
    }

    const fetchCityName = async(location:string) => {

            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${location}`)
                console.log(response);
                setLocationSuggestions(response.data);
                
            } catch (error) {
                    console.log(error);
            }
      
    }



    
    const value:IWeatherContext= {
        fetchWeatherData,
        fetchCityName,
        weatherData,
        locationSuggestions,
        setLocationSuggestions,
        cityName,
        setCityName,
        
    }

  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  )
}
