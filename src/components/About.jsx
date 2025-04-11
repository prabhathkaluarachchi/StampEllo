import "../index.css";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About StampEllo Creator</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              StampCollector is a passion project dedicated to preserving and
              showcasing the beauty and history of postage stamps from around
              the world. My mission is to create a comprehensive digital archive
              that makes philately accessible to everyone.
            </p>
          </div>
          <div className="creator-info">
            <div className="creator-card">
              <div className="creator-content">
                <div className="creator-image"></div>
                <div className="creator-details">
                  <h4>Prabhath Kaluarachchi</h4>
                  <p className="creator-title">Web Developer</p>
                  {/* <p>
                    With serveral years of web developing experience, Prabhath combines his passion for philately with his technical skills to create this digital collection platform.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
