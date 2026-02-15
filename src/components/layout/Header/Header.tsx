import styles from "./Header.module.css";

import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div className={styles.homeIconContainer}>
        <button onClick={() => navigate("/")} className={styles.homeLink}>
          <img
            src="./favicon500x500.jpeg"
            alt="Home_Icon"
            className={styles.homeIcon}
          />
        </button>
      </div>
      <div className={styles.headerTitleContainer}>
        <h1 className={styles.title}>Welcome to Nistros</h1>
      </div>
    </header>
  );
}

export default Header;
