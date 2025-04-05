import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">StampCollector</h3>
            <p className="footer-about">
              A digital archive of philatelic treasures from around the world, preserving history one stamp at a time.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/category/classic">Categories</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/get-in-touch">Get in Touch</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
            <p className="footer-email">contact@stampcollector.com</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StampCollector. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;