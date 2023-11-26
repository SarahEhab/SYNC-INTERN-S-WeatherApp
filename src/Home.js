import React, { useEffect, useState } from 'react';
import axios from "axios";
import './style.css';

const Home = () => {

    const [data , setData] = useState({
        celcius : 10,
        name : 'Germany',
        humidity : 10,
        speed : 2
    })

    const [name , setName] = useState('')
         const handelClick = () =>{
            if(name !== ''){
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=38a61b7e7d8990a307ff4f94cd8c92a6&&units=metric`;
                axios.get(apiUrl)
                .then(res => {
                    setData({...data , celcius : res.data.main.temp , name : res.data.name , 
                        humidity : res.data.main.humidity , speed : res.data.wind.speed 
                    })
                })
                .catch(err => console.log(err))
            }
         }

    return <div className='container'>
             <div className='weather' >
              <div className='search' >
                <input type='text' placeholder='Enter City Name' onChange={e => setName(e.target.value)} />
                <button ><img src='/images/search.png' onClick={handelClick}  /></button>

              </div>
              <div className='w-info'  >
              <img src='/images/cloudy.png' />
              <h1>{Math.round(data.celcius)}°C</h1>
              <h2>{data.name}</h2>

              <div className='details' >

                <div className='col'>
                <img src='/images/drop.png' />
                    <p>{Math.round(data.humidity)}%</p>
                    <p>Humdity</p>
                </div>

                <div className='col'>
                <img src='/images/windy (2).png' />
                    <p>{Math.round(data.speed)} km/h</p>
                    <p>wind</p>
                </div>

              </div>

              </div>

             </div>
    
   </div>;
}



export default Home;