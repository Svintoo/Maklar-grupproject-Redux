import "./footer.css";

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
            <li>Home</li>  
            <li>About</li>
            <li>Tours</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className="footer-section">
        <h3>Follow Us</h3>
        <p>Insta</p>
        <p>Facebook</p>
        <p>twitter</p>
    </div>
    </section>
    <div className="copyrhight"> Copyright © All rights reserved (Bostadsfynd) 2024 
    </div>
    </footer>
        </>
    );
    }

    export default footer;