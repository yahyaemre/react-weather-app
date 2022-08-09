import React, { useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {

  const [data, setData] = useState({});
  const [query, setQuery] = useState("")
  const BaseURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=f00c10dc588f3f863a08cd7fa5ec457c`

  const addQuery = (e) => {
    if (e.key === 'Enter') {
      return axios
        .get(BaseURL)
        .then((response => {
          setData(response.data);
        }))

        setQuery("");
    }
  }

  const status = ( ) => {
  const status = ["Güneşli", "Bulutlu", "Karlı", "Açık", "Yağmurlu", "Sisli"];
    
  switch (data.weather[0].main) {
    case "Clouds":
      return status[1];
    case "Snow":
      return status[2];
    
    case "Clear":
      return status[3];
    
    case "Rain":
      return status[4];
      
    case "Mist":
      return status[5];   

  }
}

  return (
    <div className="App">sa
      <input 
        value = {query}
        placeholder="Konum Giriniz..."
        onChange={event => setQuery(event.target.value)}
        onKeyPress={addQuery}      
      />

      <div className="data">
      {data.name ? <p>{data.name}'da hava; </p> : null}
      {data.main ? <p>{data.main.temp.toFixed()}°C</p> : null}
      {data.main ? <p>Nem: {data.main.humidity}%</p> : null}
      </div>
    <br />
      <div className="github">
      <a href="https://github.com/rashtion/react-weather-app" id="srcode">Source Code</a>
      </div>
    </div>
  )
}

export default App
