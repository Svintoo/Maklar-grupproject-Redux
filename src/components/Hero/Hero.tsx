import "./Hero.css";
import Image from "../../assets/imgs/hero_1280.jpg";

const Hero = () => {
  return (
    <section
      className="hero_container"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="hero_content">
        <div className="hero_form_container">
          <h2 className="">Sök bostad:</h2>
          <form className="hero_form">
            <label>
              <input
                type="text"
                name="Find"
                placeholder="Område, ort eller gata"
              />
            </label>
            <button type="submit" className="search-btn">
              Sök
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
