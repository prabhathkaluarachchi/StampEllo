import React, { useRef, useState, useEffect } from "react"; 
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const GetInTouch = () => {
  const form = useRef();
  const [adminDetails, setAdminDetails] = useState(null); // To store admin details

  // Fetch admin details from the backend to pass them to EmailJS
  useEffect(() => {
    fetch("https://stampello.onrender.com/api/admin/details")
      .then((res) => res.json())
      .then((data) => {
        if (data.password) { // If the admin details are fetched successfully
          setAdminDetails(data); // Store admin details in state
        }
      })
      .catch((error) => {
        console.error("Error fetching admin details:", error);
        Swal.fire("Error", "Failed to fetch admin credentials", "error");
      });
  }, []);

  // Send email function using emailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form from reloading the page on submit

    if (!adminDetails) {
      // Make sure the admin details are fetched before sending email
      Swal.fire("Error", "Admin details not loaded yet!", "error");
      return;
    }

    // Sending email using EmailJS with the form data and the admin details
    emailjs
      .sendForm(
        adminDetails.serviceId,  // Service ID from admin details
        adminDetails.templateId,  // Template ID from admin details
        form.current, // Form reference
        adminDetails.publicKey    // Public Key from admin details
      )
      .then(
        () => {
          form.current.reset();  // Reset the form after submission

          // Show success message using SweetAlert
          Swal.fire({
            title: 'Message Sent!',
            text: 'Thank you for getting in touch. We will respond soon!',
            icon: 'success',
            confirmButtonColor: '#e2b616',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          // Show error message if email sending fails
          Swal.fire({
            title: 'Failed to Send',
            text: 'Please try again later or contact us directly.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
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


