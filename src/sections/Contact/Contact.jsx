import { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mzzzkqbw', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setShowThankYou(true); // Show the thank you message
          form.reset(); // Reset the form fields
          setTimeout(() => setShowThankYou(false), 3000); // Hide the message after 3 seconds
        } else {
          alert('Failed to send message. Please try again.');
        }
      })
      .catch(() => {
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>

      {showThankYou && (
        <div className={styles.thankYouPopup}>
          <p>Thank you! Your message has been sent, I will get back to you soon!</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
