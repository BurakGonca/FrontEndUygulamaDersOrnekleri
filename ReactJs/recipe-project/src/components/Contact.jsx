import React from "react";
import "../assets/style/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Whether you have a question about our
        platform, need assistance, or just want to share your feedback, feel
        free to reach out to us.
      </p>

      <h2>Get in Touch</h2>
      <p>You can contact us via email or phone:</p>
      <p>
        Email: support@recipesplatform.com <br />
        Phone: +90 312 123 45 67
      </p>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.1653997907897!2d32.740680675798934!3d39.870532871532696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3471a8e2b618d%3A0x73f8bb3f0acf48d!2sBilgeAdam%20Teknoloji%20Ankara!5e0!3m2!1str!2str!4v1721199161414!5m2!1str!2str"
          width="900"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
