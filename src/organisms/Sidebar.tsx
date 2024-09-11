import { useContext } from "react";
import Text from "../atoms/Text";
import SideBarItem from "../molecules/SideBarItem";
import { WeatherContext } from "../contexts/WeatherContext";

export default function Sidebar() {

  const weatherContext = useContext(WeatherContext);
  const data = weatherContext?.weatherData;

  console.log(weatherContext?.weatherData);
  return (
    <div className='sidebar'>
      <div className="sidebar-content">
        <Text type="p" value="Weather Details..." />

        <div className="sidebar-content__details">
          <div className="sidebar-content__title">
            <Text type="p" value={data!.current.condition.text} />
          </div>
          <SideBarItem title={"Temperature"} value={data?.current.temp_c} icon={"./icon/maxTemp.svg"} />
          <SideBarItem title={"Humidity"} value={data?.current.humidity ? data?.current.humidity + "%" : ""} icon={"./icon/humidity.svg"} />
          <SideBarItem title={"Cloudy"} value={data?.current.cloud} icon={"./icon/cloudy.svg"} />
          <SideBarItem title={"Wind"} value={data?.current.wind_kph ? data?.current.wind_kph + " km/h" : ""} icon={"./icon/wind.svg"} />

        </div>


      </div>
    </div>
  )
}