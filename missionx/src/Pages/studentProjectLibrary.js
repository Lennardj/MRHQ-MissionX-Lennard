// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../Styles/studentProjectLibrary/SPL.module.css";
// Header import
import Header from "../components/sharedComponent/Header";
// Footer import
import Footer from "../components/sharedComponent/Footer";
// Project Title Import
import ProjectTitle from "../components/studentProjectLibrary/ProjectsTitle";
// Back to Top import
import BackToTop from "../components/studentProjectLibrary/BacktoTop";
// FilterForm import
import FilterForm from "../components/studentProjectLibrary/FilterForm";
// Import array of projects
// import Projects from "../components/studentProjectLibrary/ArrayOfProJect";
// Buttons
import Buttons from "../components/studentProjectLibrary/LevelOfDifficultyButtons";
import Buttons2 from "../components/studentProjectLibrary/ProjectRenderAmountButtons";
// Import Project page
import ProjectPage from "../components/studentProjectLibrary/ProjectPage";
// Import use state and use effect
import { useState, useEffect } from "react";
//import axios
import axios from "axios";

function ProjectLibrary() {
  // All porject saved in this state variable
  const [projectFromDB, setProjectFromDB] = useState([]);
  // Saves the check status of the Free and Premium Filter button
  const [checked, setChecked] = useState(false);
  // Saves the new filter array from the Free and Premium Filter button
  const [filter, setFilter] = useState([]);
  // Saves the content to be displayed from the Free and Premium Filter button
  const [filterDisplay, setFilterDisplay] = useState([]);
  // Saves the check status of button clicked
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Make a request from the database
    axios.get("http://localhost:4000/project").then(function (res) {
      // save ist of projects in this state variable
      setProjectFromDB(res.data);
    });

    // Alternative method to filter the projects
    // fetch("http://localhost:4000/project")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setProjectFromDB(result);

    //   });
  }, []);

  // handles the filter button Free and Premium
  const handleFilter = (e) => {
    // Saves the original database to this variable
    setFilter(projectFromDB);
    // Check to see which button is checked
    if (e.target.id == "Free" || e.target.id == "Premium") {
      // save the status of the checked button
      setChecked(!checked);
      console.log(`You've just clicked ${e.target.id}`);
      // filter the database based on cheked options
      const subscription = filter.filter(
        (project) => project.subscription === e.target.id
      );
      // Render out filter database
      setFilterDisplay(
        subscription.map((project) => (
          <div className={styles.projectcontainer}>
            <div className={styles.projectitem}>
              <img src={project.project_pic}></img>
              <h2>{project.name}</h2>
              <h2>
                {project.activity_type} | {project.course}
              </h2>
            </div>
          </div>
        ))
      );
    } else {
      // returns status of checkbox
      console.log(`${e.target.id} has been unchecked`);
    }
    // console.log(e.target.id);
    // console.log(checked);
  };

  const handleButtonClick = (e) => {
    // Saves the original database to this variable
    setFilter(projectFromDB);
    console.log(e.target.id);
    console.log(filter);
    // Check to see whcih button has been clicked
    if (
      e.target.id == "Beginner" ||
      e.target.id == "Intermediate" ||
      e.target.id == "Advance"
    ) {
      // save the clicked status
      setClicked(!clicked);
      console.log(`${e.target.id} has been clicked`);
      // filter the database based on button clicked
      const difficulty = filter.filter(
        (project) => project.course == e.target.id
      );
      console.log(difficulty);
      // render out filter database
      setFilterDisplay(
        difficulty.map((project) => (
          <div className={styles.projectcontainer}>
            <div className={styles.projectitem}>
              <img src={project.project_pic}></img>
              <h2>{project.name}</h2>
              <h2>
                {project.activity_type} | {project.course}
              </h2>
            </div>
          </div>
        ))
      );
    }
  };

  return (
    <>
      <div>
        <Header />
        <ProjectTitle />
      </div>

      <div className={styles.projectDisplay}>
        {/* Includes the handleFilter fucntion for Check boxes */}
        <FilterForm handleFilter={handleFilter} />
        <div className={styles.btnAndProject}>
          <div className={styles.buttons}>
            {/* includes the handlesButtonClick for buttons */}
            <Buttons handleButtonClick={handleButtonClick} />
            <Buttons2 />
          </div>
          <div className={styles.projects}>
            <ProjectPage
              // includes the orginal list of Projects the filtered list based on button click and the status of the click and checkbox
              projectFromDB={projectFromDB}
              filterDisplay={filterDisplay}
              checked={checked}
              clicked={clicked}
            />
          </div>
        </div>
      </div>

      <div>
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}

export default ProjectLibrary;
