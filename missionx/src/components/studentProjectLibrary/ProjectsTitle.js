// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../../Styles/studentProjectLibrary/SPL.module.css";

function ProjectTitle() {
  return (
    <div className={styles.projectTitle}>
      <h1>Projects</h1>
      <p>
        Welcome to the project library. You can use the filters on the right to
        help you search for specific projects.
      </p>
    </div>
  );
}
export default ProjectTitle;
