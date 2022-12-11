import styles from "../../Styles/sharedComponentCSS/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.companySection}>
          <p className={styles.footerHeader}>COMPANY</p>
          <p className={styles.footerContent}>About Us</p>
          <p className={styles.footerContent}>Carrers</p>
          <p className={styles.footerContent}>Partners</p>
        </div>

        <div className={styles.coursesSection}>
          <p className={styles.footerHeader}>COURSES</p>
          <p className={styles.footerContent}>Register</p>
          <p className={styles.footerContent}>Login</p>
          <p className={styles.footerContent}>Projects</p>
          <p className={styles.footerContent}>Teachers</p>
          <p className={styles.footerContent}>Parents</p>
          <p className={styles.footerContent}>Resources</p>
        </div>

        <div className={styles.supportSection}>
          <p className={styles.footerHeader}>SUPPORT</p>
          <p className={styles.footerContent}>FAQs</p>
          <p className={styles.footerContent}>Helpdesk</p>
          <p className={styles.footerContent}>Contact Us</p>
        </div>

        <div className={styles.legalSection}>
          <p className={styles.footerHeader}>LEGAL</p>
          <p className={styles.footerContent}>Terms & Conditions</p>
          <p className={styles.footerContent}>Privavy Policy</p>
        </div>

        <div className={styles.levelupworksSection}>
          <p className={styles.footerHeader}>LevelUp Works</p>
          <p className={styles.footerContent}>
            LevelUp Works is an Auckland-based enterprise dedicated to
            developing game- based learning software to help teachers in
            response to the New Zealand Digital Technologies & Hangarau
            Matihiko. alan@levelupworks.com (021) 668 185
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
