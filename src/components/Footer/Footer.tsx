import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitterSquare} from "react-icons/fa";

function footer() {
    return (
        <>
            <footer>
    <section>
    <div className="footer-section">
        <h3 className="bostadsfynd" >Bostadsfynd</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra condimentum.</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Contact info</h3>
        <ul>
            <li>Stockholmsvägen xx, 19xx</li>
            <li>Info@bodstadsfynd.com</li>
            <li>+46 888 8888</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Quick Link</h3>
        {/* byta ut till länkar? */}
        <ul>
            <li><span className="hover"> Home </span></li>  
            <li><span className="hover">About </span></li>
            <li><span className="hover">Tours </span></li>
            <li><span className="hover">Contact </span></li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Follow Us</h3>
        <div className="followUsIcon">
        <p className="hover"><FaFacebook /></p>
        <p className="hover"><FaInstagram /></p>
        <p className="hover"><FaTwitterSquare /></p>
        </div>
    </div>
    </section>
    <div className="copyrhight"> Copyright © All rights reserved (Bostadsfynd) 2024 
    </div>
    </footer>
        </>
    );
    }

    export default footer;