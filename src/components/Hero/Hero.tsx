import "./Hero.css";
import img3 from "../../assets/imgs/hans-m-q4Gmk6X_z7o-unsplash.jpg";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <section className="hero_container">
        <div className="hero_content">
          <img src={img3} alt="" />
          <p>
            Vi hjälper dig att hitta ditt <em>drömhus</em>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
