import homeImage from "../img/Home-pic.jpg";
import { styles } from "../Styles";
function Sidebar() {
  return (
    <div style={styles.imageContainer}>
      {/* Left Side Panel with Image */}
      <img src={homeImage} alt="Haritha Mithram" style={styles.image} />
      <p style={styles.imageCaption}>Material Collection Facility (MCF)</p>
      <p style={styles.imageCaption}>
        <strong>My Waste My Responsibility</strong>
      </p>
      <p style={styles.imageCaption}>
        Waste management is an important part of our daily living, especially if
        you are living in a city. Remember, managing food and bio degradable
        waste at home, keeping non bio degradable waste clean and dry and
        handing over to scrap dealers or local body collection systems are as
        important as consuming food!
      </p>
    </div>
  );
}

export default Sidebar;
