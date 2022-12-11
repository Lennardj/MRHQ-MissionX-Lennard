// Iport Styles: This style sheet is used for all component of Project Library
import styles from "../../Styles/studentProjectLibrary/SPL.module.css";

function FilterForm(props) {
  const handleFilter = props.handleFilter;
  return (
    <div className={styles.filterForm}>
      <div className={styles.filterFormSubscriptionContainer}>
        <h4 className={styles.filterFormHeader}>SUBSCRIPTION</h4>
        <hr className={styles.filterFormUnderline}></hr>
        <div className={styles.filterFormSubscription}>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input onChange={handleFilter} id="Free" type="checkbox"></input>
            <label className={styles.filterFormLabels}>Free</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            {" "}
            <input onChange={handleFilter} id="Premium" type="checkbox"></input>
            <label className={styles.filterFormLabels}>Premium</label>
          </div>
        </div>
      </div>

      <div className={styles.filterFormActivityTypeContainer}>
        <h4 className={styles.filterFormHeader}>ACTIVITY TYPE</h4>
        <hr className={styles.filterFormUnderline}></hr>
        <div className={styles.filterFormActivityType}>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Animation</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            {" "}
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Game</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Chatbot</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Augmented Reality</label>
          </div>
        </div>
      </div>
      <div className={styles.filterFormYearLevelContainer}>
        <h4 className={styles.filterFormHeader}>YEAR LEVEL</h4>
        <hr className={styles.filterFormUnderline}></hr>
        <div className={styles.filterFormYearLevel}>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>1 - 4</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            {" "}
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>5- 6</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>7 - 8</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>9 - 13</label>
          </div>
        </div>
      </div>
      <div className={styles.filterFormSubjectMatterContainer}>
        <h4 className={styles.filterFormHeader}>SUBJECT MATTER</h4>
        <hr className={styles.filterFormUnderline}></hr>
        <div className={styles.filterFormSubjectMatter}>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Computer Science</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            {" "}
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Maths</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Science</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Language</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Art</label>
          </div>
          <div className={styles.filterFormInputAndLabelContainer}>
            <input type="checkbox"></input>
            <label className={styles.filterFormLabels}>Music</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FilterForm;
