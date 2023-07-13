import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/product/back2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> PENCIL CRAFTS </h1>
        <p>THE BEST GIFT FROM THE ART</p>
        <Link to="/shop">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  )
}

export default Home;