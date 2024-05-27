import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import "./footer.css";
import { FiMapPin } from "react-icons/fi";
import { BsTelephoneInbound } from "react-icons/bs";
import { GoMail } from "react-icons/go";
function footer() {
  return (
    <>
      <footer>
        <section className="img-footer-wrapper">
          <div className="footer-text-wrapper ">
            <h2>Prenumerera för att få specialpris</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              pharetra condimentum.
            </p>
          </div>
          <div className="input-with-button-wrapper ">
            <input
              type="text"
              placeholder="Skriv din mail här"
              className="footer-input-field"
            />
            <button className="input-button">Subscribe</button>
          </div>
        </section>

        <section className="info-footer-wrapper">
          <div className=" footer-logo">
            <h3>Bostadsfynd</h3>
            <p>
              Vi hjälper dig att hitta ditt <em>drömhus</em>
            </p>
          </div>

          {/* <div className="footer-Quick-Link">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <span className="hover"> Home </span>
              </li>
              <li>
                <span className="hover">About </span>
              </li>
              <li>
                <span className="hover">Tours </span>
              </li>
              <li>
                <span className="hover">Contact </span>
              </li>
            </ul>
          </div> */}

          <div className="footer-Contact">
            <h3>Contact info</h3>
            <p>
              <span>
                <FiMapPin />
              </span>
              Stockholmsvägen xx, 19xx
            </p>
            <p>
              <span>
                <GoMail />
              </span>
              Info@bodstadsfynd.com
            </p>
            <p>
              <span>
                <BsTelephoneInbound />
              </span>
              +46 888 8888
            </p>
          </div>

          <div className="footer-follow">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
            </ul>
          </div>
        </section>

        <section className="copyrhight">
          <p>
            Copyright © All rights reserved <span> Bostadsfynd </span> 2024
          </p>
        </section>
      </footer>
    </>
  );
}

export default footer;
