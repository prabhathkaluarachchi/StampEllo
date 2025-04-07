import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "../index.css";

const GetInTouch = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        'service_v6e5gws',
        'template_js4cfyx',
        form.current,
        'Rl278ZygRImAbAYHh'
      )
      .then(
        () => {
          setMessageSent(true);
          form.current.reset();
  
          const successMessage = document.createElement('div');
          successMessage.textContent = 'Message sent successfully!';
          Object.assign(successMessage.style, {
            backgroundColor: '#e2b616',
            color: '#FFF',
            padding: '10px',
            marginTop: '15px',
            borderRadius: '5px',
            textAlign: 'center',
          });
  
          // 👇 Insert directly after the submit button
          const submitButton = form.current.querySelector('button[type="submit"]');
          submitButton.insertAdjacentElement('afterend', successMessage);
  
          setTimeout(() => {
            successMessage.remove();
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.error('FAILED...', error.text);
        }
      );
  
  };

  return (
    <section className="get-in-touch">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Have questions about our collection or want to contribute? Reach
              out to us!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>fmprabhath@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+94 772347420</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Digana, Rajawella, Kandy</span>
              </div>
            </div>
          </div>

          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
