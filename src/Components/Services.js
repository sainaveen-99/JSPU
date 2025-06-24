import React from "react";
import "../services.css";

const servicesData = [
  {
    title: "Advisory",
    description:
      "We offer strategic financial and business advisory services including risk management, business planning, and compliance guidance to help you grow sustainably.",
  },
  {
    title: "Assurance ",
    description:
      "We provide independent audits, internal reviews, and compliance assessments to ensure reliability, transparency, and regulatory alignment.",
  },
  {
    title: "Taxation",
    description:
      "Our end-to-end tax solutions cover tax planning, filing, and representation for both individuals and businesses, ensuring full compliance and efficiency.",
  },
];

const Services = () => {
  return (
    <div className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
