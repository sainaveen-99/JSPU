import React from "react";
import "../contact.css"; // Ensure this path is correct

const Contact = () => {
  const text =
    "Cell Number: +91 89 77 54 55 56, Office Number: +91 7815993383, Address: Office No.5, 2nd Floor, Gupthas Mid Town, Beside Padmavathi Function Hall, Guntur Road, Ongole - 523001, Operating Hours: Monday to Saturday, 10:00 AM to 7:00 PM";

  return (
    <div className="contact-section kanit-thin">
      <h2>Contact Information</h2>
      <div className="Address">
        {text.split(",").map((part, index) => (
          <p key={index}>{part.trim()}</p>
        ))}
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.3950218896157!2d80.04529967489192!3d15.516940285085292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0139103bb2d9%3A0x7c4b32b5fc955f1f!2sJ%20S%20P%20U%20%26%20ASSOCIATES%20Chartered%20Accountants!5e0!3m2!1sen!2sus!4v1750614805182!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
