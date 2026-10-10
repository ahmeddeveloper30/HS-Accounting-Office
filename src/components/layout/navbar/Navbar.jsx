import react from "react";
import "./Navbar.css";
import logo from "../../../assets/elshayb-logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={logo}
          alt="شعار مكتب الشايب"
          className="logo"
        />
        <div className="logo-text-container">
        <h1 className="logo-text">مكتب د/ حمدى الشايب</h1>
        <h2 className="logo-subtext"> محاسبون قانونيون</h2>
      </div>
        </div>
      <div className="navbar-right">
        <ul className="nav-links">
          <li>
            <a href="/من-نحن">من نحن</a>
          </li>
          <li>
            <a href="/خدماتنا">خدماتنا</a>
          </li>
          <li>
            <a href="/مشاريعنا">مشاريعنا</a>
          </li>
          <li>
            <a href="/قناتنا">قناتنا</a>
          </li>
          <li>
            <a href="/تواصل-معنا">تواصل معنا</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

