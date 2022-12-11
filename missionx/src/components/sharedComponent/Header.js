// Image import from Image headerAssests
/*################ */
// Logo import from headerAssests
import logowhite from "../../Images/headerAssets/levelUpWorksWhite.png";
import logoblue from "../../Images/headerAssets/levelUpWorksBlue.png";

// Flag import from headerAssests
import maoriflag from "../../Images/headerAssets/maoriFlag.png";
import nzflag from "../../Images/headerAssets/nzFlag.png";

// Import of blank Avatar
import blankAvatar from "../../Images/headerAssets/avatarWhite.png";

// import of RawiriAvatar from headerAssests
import rawiriAvatar from "../../Images/headerAssets/rawiriFletcher.png";

// import CSS
import styles from "../../Styles/sharedComponentCSS/Header.module.css";

// import LINK
import Link from "@mui/material/Link";
function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* Levelup Works logo section */}
      <div className={styles.leftContent}>
        <div className={styles.levelUpLogoContainer}>
          {/* This should link to Darren Home page as a Route*/}{" "}
          <Link href="#">
            <img
              className={styles.leveluplogo}
              src={logowhite}
              alt="LevelUp Logo in white"
            />
          </Link>
        </div>
      </div>

      {/* Navigation bar section */}
      <div className={styles.centerNav}>
        {/* This should link to Darren home page as A Route  */}

        <Link href="#" underline="none">
          {" "}
          <p className={styles.headerText}>HOME</p>
        </Link>

        <Link href="#" underline="none">
          {" "}
          <p className={styles.headerText}>PROJECT</p>
        </Link>

        <Link href="#" underline="none">
          {" "}
          <p className={styles.headerText}>TEACHERS</p>
        </Link>
      </div>

      {/* Right section with language and profile information */}
      <div className={styles.rightContent}>
        <div className={styles.language}>
          <p className={styles.headerLang}>LANG</p>
          <div>
            <img
              className={`${styles.flag} ${styles.maoriflag}`}
              src={maoriflag}
              alt="MAori Flag"
            />
          </div>
          <div>
            <img
              className={`${styles.flag} ${styles.nzflag}`}
              src={nzflag}
              alt="New Zealand Flag"
            />
          </div>
        </div>{" "}
        <div className={styles.avatarInfo}>
          <div>
            <Link href="#" underline="none">
              <img
                className={styles.avatar}
                src={rawiriAvatar}
                alt="Head shot of Rawiri"
              />
            </Link>
          </div>
          {/* This hould link to the studens  profile viwer.
          the header and the footer are the same so we can try Usestate or conditional 
          rendering, if all else fail then we will use Route*/}
          <div class={styles.dropdown}>
            <Link href="#" underline="none">
              <p className={`${styles.headerText} ${styles.dropbtn}`}>
                Rawiri Fletcher
              </p>
              <div class={styles.dropdowncontent}>
                <div class={styles.arrowup}></div>
                <div className={styles.dropdownlist}>
                  <a href="#">My Profile</a>
                  <a href="#">Settings</a>
                  <a href="#">Log Out</a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
