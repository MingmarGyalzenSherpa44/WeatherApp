import React, { useContext } from 'react'
import { ILocation } from '../interfaces/ILocation';
import { WeatherContext } from '../contexts/WeatherContext';

interface ISuggestions{
    className:string,
    suggestions:ILocation[]
}

export default function Suggestions({suggestions,className}:ISuggestions) {
    console.log("inside suggestions");
    console.log(suggestions);

    const weatherContext = useContext(WeatherContext);

    function handleClick  (e:React.MouseEvent<HTMLLIElement>){
        const value = e.target.dataset.city;
        weatherContext?.setCityName(value);
        weatherContext?.fetchWeatherData(value);
        weatherContext?.setLocationSuggestions([]);
    }

  return (
    <ul className={className}>
        {suggestions.map(suggestion => {
            return <li onClick={handleClick} key={suggestion.id} data-city={suggestion.name}>{suggestion.name}</li>
        })}
    </ul>
  )
}
