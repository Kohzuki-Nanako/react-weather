import Image from 'react-image-resizer';
import React from "react";
import tenkikun from "./media/kappa_man2.png"
import irasutoya from "./media/スクリーンショット 2020-06-25 0.36.56.png"
import rainbow from "./media/sky_line04_rainbow.png"
import Project from "./project";

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
      <Project />
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


export default App;