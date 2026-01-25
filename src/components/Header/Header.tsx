import "./Header.module.css";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className="home-icon-container">
        <button onClick={() => navigate("/")} className="home-link">
          <img
            src="./public/favicon500x500.jpeg"
            alt="Home_Icon"
            className="home-icon"
          />
        </button>
      </div>
      <div className="header-title-container">
        <h1 className="title">Welcome to Nistros</h1>
      </div>
    </header>
  );
}

export default Header;
