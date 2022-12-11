// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../../Styles/studentProjectLibrary/SPL.module.css";
function Buttons(props) {
  const handleButtonClick = props.handleButtonClick;
  return (
    <div className={styles.btn}>
      <button
        onClick={handleButtonClick}
        id="Beginner"
        name="Beginner"
        className={styles.leftbtn}
      >
        BEGINNER
      </button>
      <button
        onClick={handleButtonClick}
        id="Intermediate"
        name="Intermediate"
        className={styles.leftbtn}
      >
        INTERMEDIATE
      </button>
      <button
        onClick={handleButtonClick}
        id="Advance"
        name="Advance"
        className={styles.leftbtn}
      >
        ADVANCE
      </button>
    </div>
  );
}
export default Buttons;
