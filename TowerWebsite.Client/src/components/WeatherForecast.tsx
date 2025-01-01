import { useEffect, useState } from 'react';

interface Forecast {
  date: string;
  temperatureC: number;
  summary: string;
}

const WeatherForecast = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        const forecasts = data.map((item: Forecast) => ({
          ...item,
          date: new Date(item.date),
        }));
        setForecasts(forecasts);
      });
  }, []);

  return (
    <>
      <h1>Weather Forecast</h1>
      <ul>
        {forecasts.map((forecast, index) => (
          <li key={index}>
            {new Date(forecast.date).toLocaleString()}: {forecast.temperatureC}
            °C ({forecast.summary})
          </li>
        ))}
      </ul>
    </>
  );
};

export default WeatherForecast;
