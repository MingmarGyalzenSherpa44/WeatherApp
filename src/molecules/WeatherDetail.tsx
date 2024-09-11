import React, { useContext } from 'react'
import { WeatherContext } from '../contexts/WeatherContext'
import Image from '../atoms/Image';

export default function WeatherDetail() {

    const weatherContext = useContext(WeatherContext);

    console.log(weatherContext?.weatherData);
    return (
        <div className='weather-detail'>
            <div className="weather-detail__temp">
                {weatherContext?.weatherData.current.temp_c}
            </div>
            <div className="weather-detail__content">
                <div className="weather-detail__content__place">
                    {weatherContext?.weatherData.location.name}
                </div>
                <div className="weather-detail__content__time">
                    {weatherContext?.weatherData.location.localtime}
                </div>
            </div>
            <div className="weather-detail__content__icon">
                <Image alt='' src={weatherContext?.weatherData.current.condition.icon || ""} />
            </div>
        </div>
    )
}
