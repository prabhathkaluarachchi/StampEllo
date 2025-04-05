import '../index.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About StampCollector</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              StampCollector is a passion project dedicated to preserving and showcasing the beauty and history of postage stamps from around the world. Our mission is to create a comprehensive digital archive that makes philately accessible to everyone.
            </p>
            <p>
              Founded in 2023, we've grown from a small private collection to a community-driven platform with thousands of stamps cataloged. Each stamp tells a unique story about the culture, history, and art of its time.
            </p>
            <p>
              Whether you're a seasoned collector or just starting your philatelic journey, StampCollector offers resources, inspiration, and a community to share your passion with.
            </p>
          </div>
          <div className="creator-info">
            <h3>About the Creator</h3>
            <div className="creator-card">
              <div className="creator-image"></div>
              <div className="creator-details">
                <h4>John Doe</h4>
                <p className="creator-title">Philatelist & Web Developer</p>
                <p>
                  With over 20 years of stamp collecting experience, John combines his passion for philately with his technical skills to create this digital collection platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
