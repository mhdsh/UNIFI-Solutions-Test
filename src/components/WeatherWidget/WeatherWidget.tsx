import { Button } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './WeatherWidget.scss';

const WeatherWidget = () => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Damascus&appid=41066d9fdc8827e3690837835465b36d&units=metric')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }, []);
  
  return (
    <div className="weather-widget">
    { isLoading ? 'Loading weather...' :
    <>
      <div className="city">{data.name}</div>
      <div className="date">{new Date().toLocaleDateString()}</div>
      <div className="status">
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        <div>{data.weather[0].main}</div>
      </div>
      <div className="degree">{Math.round(data.main.temp)}<span>°C</span></div>
      <div style={{ textAlign: 'right' }}>
        <Link to="/forcast"><Button>View more data</Button></Link>
      </div>
    </>
    }
    </div>
  );
};

export default WeatherWidget;