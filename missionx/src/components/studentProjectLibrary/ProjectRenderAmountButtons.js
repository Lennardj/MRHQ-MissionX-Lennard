// Iport Styles: This style sheet is used for all component of Project Library

import styles from "../../Styles/studentProjectLibrary/SPL.module.css";
function Buttons2() {
  return (
    <div className={styles.btn2}>
      <button className={styles.rightbtn}>25</button>
      <button className={styles.rightbtn}>50</button>
      <button className={styles.rightbtn}>100</button>
    </div>
  );
}
export default Buttons2;
