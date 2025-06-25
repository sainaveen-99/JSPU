import React from "react";
import "../home.css";
import Header from "./Header";
import Card from "./Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <div className="home-content">
        <h1 className="welcome-header">
          Welcome to J S P U & Associates
          <br /> Chartered Accountants
        </h1>

        <h2 className="tools1">
          <Link to="/services" className="clickable">
            Advisory
          </Link>{" "}
          |{" "}
          <Link to="/services" className="clickable">
            Assurance
          </Link>{" "}
          |{" "}
          <Link to="/services" className="clickable">
            Taxation
          </Link>
        </h2>
        <h3 className="tools2">
          We are a team of professionals providing advisory and assurance
          services, committed to delivering practical and valuable insights to
          our clients.
        </h3>
      </div>

      <div className="cards-section">
        <h1 className="meet-heading">Meet Our Team</h1>
        <div className="cards-container">
          <Card
            name="Jaswanth Sudanagunta"
            qualification="B.Com, ACA, DISA, AICA"
            number="+91 89 77 54 55 56"
            email="cajaswanthoffice@gmail.com"
            image="/profile1.jpeg"
          />
          <Card
            name="Phanindra Uppuluri"
            qualification="ACA"
            number="+91 99481 78332"
            email="caphanindrauppuluri@gmail.com"
            image="/profile2.jpg"
          />
          <Card
            name="Kaveri Thammaneni"
            qualification="ACA"
            number="+91 73 96 99 22 99"
            email="kaveri1596@gmail.com"
            image="/profile3.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
