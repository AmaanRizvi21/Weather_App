import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Lucknow",
    temp: 27.92,
    temp_feels_like: 32.99,
    temp_max: 27.92,
    temp_min: 27.92,
    weather_description: "Clouds",
    humidity: 93,
  });

  let handleWeather = (W) => {
    setWeather(W);
  };

  return (
    <div>
      <h2
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        Weather App By <i>Amaan</i>
      </h2>
      <SearchBox setW={handleWeather} />
      <InfoBox weatherInfo={weather} />
    </div>
  );
}
