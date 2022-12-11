// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../../Styles/studentProjectLibrary/SPL.module.css";
import { useState, useEffect } from "react";

// Receive Array of Project with in the props object
function ProjectPage(props) {
  const [originalDisplay, setOriginalDisplay] = useState();
  const checked = props.checked;
  const clicked = props.clicked;
  const infoFromDB = props.projectFromDB;
  const filterDisplay = props.filterDisplay;
  // const [infoFromDB, setInfoFromDB] = useState([]);
  // setInfoFromDB(props.projectFromDB);

  return (
    <>
      {checked || clicked
        ? filterDisplay
        : infoFromDB.map((project) => (
            <div className={styles.projectcontainer}>
              <div className={styles.projectitem}>
                <img src={project.project_pic}></img>
                <h2>{project.name}</h2>
                <h2>
                  {project.activity_type} | {project.course}
                </h2>
              </div>
            </div>
          ))}
    </>
  );
}
export default ProjectPage;
