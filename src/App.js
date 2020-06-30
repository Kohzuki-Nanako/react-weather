import Image from 'react-image-resizer';
import React ,{ useState } from "react";
import Weather from "./components/Weather/Weather";
import Form from "./components/Form/Form";
import tenkikun from "./media/kappa_man2.png"
import irasutoya from "./media/スクリーンショット 2020-06-25 0.36.56.png"
import rainbow from "./media/sky_line04_rainbow.png"
import './App.css';
import Form from './form';
import Weather from './weather';


const style = {
    image: {
      border: '0px solid #ccc',
      background: '#fefefe',
    },
};

const App = () => {
  return <div>
   <section className="hero is-medium is-primary is-bold">
    <div className="hero-body">
     <div className="container">
      <h1 className="title">
        世界の天気
      </h1>
      <h2 className="subtitle">
        いろんな地域の天気を知ろう！
      </h2>
     </div>
    </div>
  </section>
  <div className="container">
  <div className="tile is-ancestor">
   <div className="tile is-3 is-vertical is-parent">
    <div className="tile is-child box">
      <p className="title">TENKI君</p>
      <Image
         src={tenkikun}
         width={300}
         height={300}
         style={style.image}
      />
      <p>入社1年目の新人。</p>
      <p>雨の日が好き。</p>
    </div>
    
    <div className="tile is-child box">
      <p className="title">お世話になってる画像サイト</p>
      <div class="card">
            <div class="card-image">
             <figure class="image is-5by3">
                <img src={irasutoya} alt="いらすとや"/>
             </figure>
            </div>
      </div>
      <a href="https://www.irasutoya.com">
          <p><strong>いらすとや</strong></p>
      </a>
    </div>
    </div>
  <div className="tile is-parent">
    <div className="tile is-child box">
      <figure class="image is-512x512">
        <img src={rainbow} alt ="虹"/>
      </figure>
      <p className="title">世界の天気は？</p>
      <Forcast />
    </div>
   </div>
  </div>
  <footer calssName="footer">
      <div className="content has-text-centered">
        <p>2020 © Kohzuki_Nanako</p>
      </div>
   </footer>
 </div>
</div>
};


const Forcast = () => {
    const [weather,setWeather] = useState([])
    const APIKEY = '4137c4ce4404f78ffb0df598b3efd8ea'
  
    async function fetchData(e) {
      const city = e.target.elements.city.value
      const country = e.target.elements.country.value
        e.preventDefault()
      const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
        .then( res => res.json())
        .then(data => data)
        if(city && country) {
        setWeather({
          data: apiData,
          city: apiData.city,
          country: apiData.sys.country,
          description: apiData.weather[0].description,
          temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
          error:""
        }
        )} else {
          setWeather({
            data: '',
            city: '',
            country: '',
            description: '',
            temperature: '',
            error:"Please Type A City And Country"
        }
        )}
    }
  return (
    <div className="App">
      <h3>WEATHER APP</h3>
      <Form getWeather={fetchData} />
      <Weather
      city={weather.city}
      country={weather.country}
      description={weather.description}
      temperature={weather.temperature}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}



export default App;