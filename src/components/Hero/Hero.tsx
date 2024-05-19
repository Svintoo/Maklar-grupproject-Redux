import "./Hero.css";
import img3 from "../../assets/imgs/hans-m-q4Gmk6X_z7o-unsplash.jpg";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div className="hero_container">
      <Header />
      <section
        className="hero_container"
        // style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero_content">
          <img src={img3} alt="" />
          <p>
            Vi hjälper dig att hitta ditt <em>drömhus</em>
          </p>
        </div>
        {/* <div className="hero_content">
        <div className="hero_form_container">
          <h2 className="">Sök bostad:</h2>
          <form className="hero_form">
            <label>
              <input
                type="serch"
                name="Find"
                placeholder="Område, ort eller gata"
              />
            </label>
            <button type="submit" className="search-btn">
              Sök
            </button>
          </form>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Hero;
