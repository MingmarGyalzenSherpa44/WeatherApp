
import { useContext } from "react";
import "./sass/index.scss";
import Header from "./organisms/Header";
import Sidebar from "./organisms/Sidebar";
import { WeatherContext } from "./contexts/WeatherContext";
import WeatherDetail from "./molecules/WeatherDetail";

function App() {

  const weatherData = useContext(WeatherContext);
  console.log(weatherData);






  return (
    <>
      {weatherData && (
        <div className="app">
          <Header />
          <div className="app-body">
            <WeatherDetail />
            <Sidebar />
          </div>

        </div>
      )}
    </>
  );
}

export default App;
