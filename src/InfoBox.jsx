import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

//Material Icons
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import SunnyIcon from "@mui/icons-material/Sunny";

export default function InfoBox({ weatherInfo }) {
  let cloud_URL =
    "https://images.unsplash.com/photo-1498085245356-7c3cda3b412f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvdWR5fGVufDB8fDB8fHww";

  let rain_URL =
    "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let hot_URL =
    "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let cold_URL =
    "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let MaterialIcon =
    weatherInfo.humidity > 85
      ? ThunderstormIcon
      : weatherInfo.humidity > 60
      ? CloudIcon
      : weatherInfo.temp > 32
      ? SunnyIcon
      : AcUnitIcon;

  return (
    <div>
      <h1>Weather Information</h1>
      <div
        className="infoContainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                weatherInfo.humidity > 85
                  ? rain_URL
                  : weatherInfo.humidity > 60
                  ? cloud_URL
                  : weatherInfo.temp > 32
                  ? hot_URL
                  : cold_URL
              }
              alt="weather picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherInfo.city} <MaterialIcon />
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Temperature: {weatherInfo.temp}&deg;C <br />
                Min Temp: {weatherInfo.temp_min}&deg;C <br />
                Max Temp: {weatherInfo.temp_max}&deg;C <br />
                Temp FeelsLike: {weatherInfo.temp_feels_like}&deg;C <br />
                The weather has <i>{weatherInfo.weather_description}</i> and
                feels like {weatherInfo.temp_feels_like}&deg;C
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
