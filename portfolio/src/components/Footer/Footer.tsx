import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerInner}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <h2>Contact</h2>
            <h3>
              <span>01aldrn10@gmail.com</span><br/>01aldrn_10@naver.com
            </h3>
            <Link to="https://github.com/kmmkyung" target="_blank" rel="noopener noreferrer">github</Link>
          </div>
          <p>{new Date().getFullYear()} &copy; Kim Min Kyung</p>
        </div>
      </div>
    </footer>
  );
}