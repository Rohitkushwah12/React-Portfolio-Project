import React from "react";
import Typical from "react-typical";
import "./Header.css";
import profileImg from "../../assets/profileImg.png";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hy! Am</h1>
        <h2 className="fullname">Rohit Kushwah</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Frontend Developer ✅",
              1000,
              "Backend Developer 🏆",
              1000,
              "React Developer ⚛️",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>

          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image Container */}
      <div className="profile-img-container">
        <img src={profileImg} alt=""></img>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
