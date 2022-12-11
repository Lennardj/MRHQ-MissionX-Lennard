// Iport Styles: This style sheet is used for all component of Profile Viewer
import styles from "../../Styles/studentProfileViewer/SPV.module.css";

function Card(props) {
  const profilePic = props.picFromDB;
  console.log(props);
  return (
    <>
      {profilePic.map((pic) => (
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <img className={styles.img} src={pic.profile_pic}></img>
          </div>

          <div className={styles.btncontainer}>
            <button className={styles.btn1}>EDIT PROFILE</button>
            <button className={styles.btn1}>CHANGE PHOTO</button>
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
