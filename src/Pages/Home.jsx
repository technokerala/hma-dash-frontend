import homeIcon from "../img/home.png";
import { styles } from "../Styles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header style={styles.header}>
      <div>
        <Link to="/">
          <img src={homeIcon} alt="Home" style={styles.imageIcon} />
        </Link>
        <h1 style={styles.title}>Haritha Mithram </h1>
        <p style={styles.subtitle}>State Dashboard</p>
      </div>
    </header>
  );
}

export default Home;
