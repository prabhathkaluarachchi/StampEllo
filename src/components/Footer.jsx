import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">StampEllo</h3>
            <p className="footer-about">
            Explore our curated collection of philatelic treasures in Sri Lanka.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/persons">Persons</Link></li>
              <li><Link to="/transportation">Transportation</Link></li>
              <li><Link to="/places">Places</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/prabhathkaluarachchi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/prabhathkaluarachchi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.facebook.com/prabhathtkaluarachchi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/prabhathtkaluarachchi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/94772347420" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
            {/* <p className="footer-email">fmprabhath@gmail.com</p> */}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StampEllo. All rights reserved.</p>
          <p>Code & Developed by <a href="https://prabhath.online/" target='blank'>Prabhath Kaluarachchi</a> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
