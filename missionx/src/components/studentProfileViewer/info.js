// Iport Styles: This style sheet is used for all component of Profile Viewer
import styles from "../../Styles/studentProfileViewer/SPV.module.css";
function Info(props) {
  const profileInfo = props.profileFromDB;
  // console.log(props, profileInfo);
  return (
    <>
      {profileInfo.map((profile) => (
        <div className={styles.infocontainer}>
          <h1>{profile.name}</h1>
          <table className={styles.table}>
            <tr>
              <td>School</td>
              <td>{profile.school}</td>
            </tr>
            <tr>
              <td>Teacher</td>
              <td>{profile.teacherName}</td>
            </tr>
            <tr>
              <td>Course</td>
              <td>{profile.course}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{profile.date_of_birth.split("T12:00:00.000Z")}</td>
            </tr>
            <tr>
              <td>Contact No</td>
              <td>{profile.contact_number}</td>
            </tr>
            <tr>
              <td>Email Address</td>
              <td>{profile.email}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}
export default Info;
