import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          class="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1231232131"
            title="The Lean Startup"
            price={29.9}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Cubii Pro Under Desk"
            price={249.0}
            image="https://m.media-amazon.com/images/I/517UJPO7MvL._AA210_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1122"
            title="Samsung LC49RGasdf 49' Cured Led Gaming MOnitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
          />
          <Product
            id="123"
            title="Amaxon (3rd Generation) Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="124"
            title="New Apple Ipad Pro (12.9-inch , Wifi ,128 Gb )- Silver (4th Generation)"
            price={589.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="125"
            title="Samsung LC49RG0 49 Curved LED Gaming Monitor - Siper Ultra Wide Dual WQHD 3120 X 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
