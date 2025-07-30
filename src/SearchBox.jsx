import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ setW }) {
  let [city, setCity] = useState("");

  // let API_URL="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  let API_KEY = "8eed721e79c4e7dd9b5f7d57d71b10a0";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    // console.log("Amaan:", jsonResponse.cod);
    if (jsonResponse.cod == 404) {
      return alert("Sorry, City Not Found");
    }
    let weatherInfo = {
      city: city,
      temp: jsonResponse.main.temp,
      temp_min: jsonResponse.main.temp_min,
      temp_max: jsonResponse.main.temp_max,
      temp_feels_like: jsonResponse.main.feels_like,
      weather_description: jsonResponse.weather[0].description,
      humidity: jsonResponse.main.humidity,
    };
    console.log(weatherInfo);
    setW(weatherInfo);
  };

  let handleChange = (evt) => {
    // console.log(city);
    setCity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("City: ", city);
    setCity("");
    getWeatherInfo();
  };

  return (
    <div>
      <h3>Search For The Weather</h3>
      <form action="#" onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
