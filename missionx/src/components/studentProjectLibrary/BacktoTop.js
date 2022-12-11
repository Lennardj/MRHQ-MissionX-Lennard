// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../../Styles/studentProjectLibrary/SPL.module.css";

// Import Button from MUI
import Button from "@mui/material/Button";

function BackToTop() {
  return (
    <div className={styles.backToTop}>
      {/* Jump to Top Button */}
      <Button
        variant="contained"
        size="small"
        style={{ backgroundColor: "orange" }}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        BACK TO TOP
      </Button>
    </div>
  );
}
export default BackToTop;
