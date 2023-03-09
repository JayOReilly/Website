import React, {useState, useEffect} from 'react'


function weatherapi() {
    const apiKey = '0ef38c7176b097e15005f163b5dad17b'
    const [weatherData, setWeatherData] = useState ([{}]);
    const [city,setCity] = useState("")

    const getWeather = (event) =>{
      if(event.key == "Enter"){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then(
          response => response.json()
        ).then(
          data => {
            setWeatherData(data)
          }
        )
        
      }
    }

  return (
    <div className=' bg-black h-screen'>
      
        <div className="grid place-items-center flex-col justify-center">
            <input className="p-4 mt-4 border  w-96  
             border-black rounded-lg" placeholder='Enter City or Town...
             
             '
             
             onChange={e => setCity(e.target.value)}
              value={city}
              onKeyPress={getWeather}>
              


             </input>
             {typeof weatherData.main == 'undefined' ? (
              <div className='bg-white border-black borderlg mt-4 outline-double p-5'>
                  <h1 className="grid place-items-center text-3xl mt-8">Welcome to WeatherNow</h1>
                  <p className="grid place-items-center mt-4">Enter a City or Town to get live weather</p>
              </div>
             ) : (
              <div className='bg-green-200 p-4 mt-4 border w-full grid place-items-center flex-col justify-center'>
                <p>Location: {weatherData.name}</p>
                <p>Temperature: {Math.round(weatherData.main.temp)}℃</p>
                <p>Conditions: {weatherData.weather[0].main}</p>
              </div>

             )}

        </div>
       

    </div>
    
  
  )
  
}


export default weatherapi