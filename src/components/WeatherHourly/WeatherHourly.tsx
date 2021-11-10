import './WeatherHourly.scss';

interface IProps {
  degree: number;
  date: string;
  icon: string;
}

export default (props: IProps) => {
  const { degree, date, icon } = props;

  return (
    <div className="weather-hourly">
      <div className="date">{date}</div>
      <div className="degree">{degree}<span>°C</span></div>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
    </div>
  );
};