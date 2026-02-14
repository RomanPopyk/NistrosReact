import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <a href="mailto:romanrpopyk@ukr.net">Contact me</a>
      </p>
      <p className={styles.copyrightContainer}>
        &copy; 2026 Nistros. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
