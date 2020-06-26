import Image from 'react-image-resizer';
import React from "react";
import axios from "axios";
import Weather from "./components/Weather/Weather";
import Form from "./components/Form/Form";
import tenkikun from "./media/kappa_man2.png"
import irasutoya from "./media/スクリーンショット 2020-06-25 0.36.56.png"
import rainbow from "./media/sky_line04_rainbow.png"


const style = {
    image: {
      border: '0px solid #ccc',
      background: '#fefefe',
    },
};

const api_key = "4137c4ce4404f78ffb0df598b3efd8ea"

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
      <p>新人くん。</p>
      <p>雨の日が好き。</p>
    </div>
    
    <div className="tile is-child box">
      <p className="title">オススメの画像サイト</p>
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

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  // const [icon, setIcon] = useState();
  const [description, setDescription] = useState("");
  const [temp_min, setTemp_min] = useState("");
  const [temp_max, setTemp_max] = useState("");
  const [temp, setTemp] = useState("");
  // const [error, setError] = useState(false);


  const getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      // console.log("got here")
      if (city && country) {
          const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
          const response = await api_call;
          // console.log(response);
          // return response;
          setCity(response.data.name)
          setCountry(response.data.sys.country);
          setTemp(response.data.main.temp);
          setTemp_max(response.data.main.temp_max);
          setTemp_min(response.data.main.temp_min);
          setDescription(response.data.weather[0].description);
          console.log(response);

      }
  }
  return (
      <div className="App">
          <Weather 
              city = {city} 
              country = {country} 
              temp = {temp} 
              temp_max = {temp_max}
              temp_min = {temp_min}
              description = {description}
          />
          <Form loadWeather={getWeather} />
      </div>
  )
}



export default App;