import { useLayoutEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import WeatherData from './components/WeatherData'

function App() {
  const [position, setPosition] = useState()
  let [weather, setWeather] = useState()
  
  
    useEffect(() => {
      
      const coordinates = (pos) => {
        
        setPosition( 
        
          {"lat": pos.coords.latitude,
           "lon": pos.coords.longitude
          } 
          
        )
      }

      navigator.geolocation.getCurrentPosition(coordinates)
    },[])

 
    useEffect(() => {
      const API = "ee4c58dc44cc8898d3029a2045e2615f"
      if(position){
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${API}`
        axios.get(URL)
        .then( res => setWeather(res.data)) 
        .catch( error => console.log(error))
      }
    },[position])

    

  return (
    <div className="App">
      <WeatherData
        weather = {weather}
      />  
      
    </div>
  )
}

export default App
