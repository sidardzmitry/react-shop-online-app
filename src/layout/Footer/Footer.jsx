import styles from "./Footer.module.scss";
import {
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h5>@ {new Date().getFullYear()} Shop App</h5>
        <span>Author: 'Dmitriy S'</span>
      </div>

      <div className={styles['footer-icons']}>
        <span>Follow us on</span>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/dmitriy-sidortsov-419701228/" target="_blank" rel="noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://github.com/sidardzmitry" target="_blank" rel="noreferrer">
            <FaGithubSquare className={styles.icon} />
          </a>
        </div>
      </div>
      
      <div className={styles["footer-navbar"]}>
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </footer>
  );
};

export default Footer;
