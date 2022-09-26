import React, { useEffect, useState } from "react"
import imageCloud from "/Images/backgrounds/hand-painted-watercolor-pastel-sky-cloud-background_41066-1919.jpg"
import imageRain from "/Images/backgrounds/rainy.jpg"
import imageSun from "/Images/backgrounds/screen-6.webp"
const WeatherData = ({weather}) => {
    console.log(weather)
    const [changetemp, setChangetemp] = useState(true)
    const [changeback, setChangeback] = useState()
    
    function changeTempMeasure() {
        if(changetemp) {
            setChangetemp(false)
            
        }
        if(!changetemp) {
            setChangetemp(true)
            
        }
        
    }

    useEffect(()=>{
        setBackground();
        function setBackground(){
            if(weather?.weather[0].main == "Clouds"){setChangeback(imageCloud)}
            if(weather?.weather[0].main == "Rain"){setChangeback(imageRain)}
            if(weather?.weather[0].main == "Clear"){setChangeback(imageSun)}
            
        }
    },[weather])
    
    return(
        
        <div className="main" style={{ backgroundImage: `url(${changeback})` }} >
            <div className="display" >
                
            <div className="title">
                <h1>{weather?.name}, {weather?.sys.country}</h1>
            </div>
            
            <div className="weather_conditions">
                <div className="img">
                    <img src={ weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}alt="" />
                </div>
                <div className="info">
                    <p>Temperature: {changetemp == true ? `${Math.round((weather?.main.temp-273.15)*(9/5)+32)} F°` : `${Math.round(weather?.main.temp - 273.15)} C°`}</p>
                    <p>Humidity: {`${weather?.main.humidity} %`}</p>
                    <p>Thermal sensation  : {changetemp == true ? `${Math.round((weather?.main.feels_like-273.15)*(9/5)+32)} °F` : `${Math.round(weather?.main.feels_like - 273.15)} °C`}</p>
                    <p>Wind: {weather?.wind.speed} m/s at {weather?.wind.deg}° </p>
                </div>
                <button className="button" onClick={changeTempMeasure}>
                    <p>Change to {changetemp == true ? "°C" : "°F"}</p>
                </button>
            </div>
            </div>
        </div>

    )
}

export default WeatherData 