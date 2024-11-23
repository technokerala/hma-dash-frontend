import homeImage from "../img/Home-pic.jpg";
import {styles} from "../Styles" ;
import Statedash from "./Statedash";
import Footer from "./Footer";

function Home() {
  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Haritha Mithram </h1>
        <p style={styles.subtitle}>State Dashboard</p>
      </header>

      <div style={styles.main}>
        {/* Left Side Panel with Image */}
        <div style={styles.imageContainer}>
          <img src={homeImage} alt="Haritha Mithram" style={styles.image} />
          <p style={styles.imageCaption}>Material Collection Facility (MCF)</p>
          <p style={styles.imageCaption}>
            <strong>My Waste My Responsibility</strong>
          </p>
          <p style={styles.imageCaption}>
            Waste management is an important part of our daily living,
            especially if you are living in a city. Remember, managing food and
            bio degradable waste at home, keeping non bio degradable waste clean
            and dry and handing over to scrap dealers or local body collection
            systems are as important as consuming food!
          </p>
        </div>

        {/* Main Dashboard */}
        <div style={styles.dashboard}>
          {/* Heading Placeholder */}
          <div style={styles.heading}>
            <h3>District-wise Statistics at a Glance</h3>
          </div>
          <Statedash />
          <Footer />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
