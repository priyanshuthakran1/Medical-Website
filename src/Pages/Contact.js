import React from "react";
import "./Contact.css"; // Importing the CSS file

const Contact = () => (
  <div className="contact-container">
    <h2>Contact Us</h2>
    <p>Have any questions? Reach out to us at:</p>
    <ul className="contact-list">
      <li><strong>Email:</strong> support@medicwebsite.com</li>
      <li><strong>Phone:</strong> 942XXXX10</li>
      <li><strong>Address:</strong> 123 Medic Street, Health City</li>
    </ul>
  </div>
);

export default Contact;
