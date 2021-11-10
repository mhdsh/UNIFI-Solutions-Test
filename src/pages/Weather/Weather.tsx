import { Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import WeatherHourly from '../../components/WeatherHourly/WeatherHourly';

const Weather = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.5138&lon=36.2765&appid=41066d9fdc8827e3690837835465b36d&units=metric&exclude=minutely')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="weather-page">
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 5 }}>
        <Grid item lg={10}>
          {isLoading ? 'Loading weather...' :
          <div className="hourly-list">
            <h1>Damascus</h1>
            <h3>10 hours forcast</h3>
            <Grid container item style={{ margin: '0 -10px' }}>
              {[...Array(10)].map((x, index) => (
                <Grid item lg={12 / 10} key={data.hourly[index + new Date().getHours()].dt}>
                  <WeatherHourly
                    degree={Math.round(data.hourly[index + new Date().getHours()].temp)}
                    date={( index + new Date().getHours() > 23 ? index + new Date().getHours() - 24 : index + new Date().getHours() ) + ':00'}
                    icon={data.hourly[index + new Date().getHours()].weather[0].icon}
                  />
                </Grid>
              ))}
            </Grid>
            
            <h3>5 days forcast</h3>
            <Grid container item style={{ margin: '0 -10px' }}>
              {[...Array(5)].map((x, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);
                return (
                  <Grid item lg={12 / 5} key={data.daily[index].dt}>
                    <WeatherHourly
                      degree={Math.round(data.daily[index].temp.max)}
                      date={date.toLocaleDateString()}
                      icon={data.daily[index].weather[0].icon}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </div>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default Weather;