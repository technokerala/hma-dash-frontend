import homeImage from "../img/Home-pic.jpg";
const districts = [
  {
    name: "Thiruvananthapuram",
    buildingCount: "454554",
    enrolledCount: "45455",
    collectionCount: "4654",
  },
  {
    name: "Kollam",
    buildingCount: "464646",
    enrolledCount: "34645",
    collectionCount: "4646",
  },
  {
    name: "Pathanamthitta",
    buildingCount: "64646",
    enrolledCount: "4646",
    collectionCount: "65454",
  },
  {
    name: "Alappuzha",
    buildingCount: "46465",
    enrolledCount: "64646",
    collectionCount: "3332",
  },
  {
    name: "Kottayam",
    buildingCount: "97964",
    enrolledCount: "65464",
    collectionCount: "64645",
  },
  {
    name: "Idukki",
    buildingCount: "44541",
    enrolledCount: "46464",
    collectionCount: "65464",
  },
  {
    name: "Eranakulam",
    buildingCount: "454554",
    enrolledCount: "45455",
    collectionCount: "4654",
  },
  {
    name: "Thrissur",
    buildingCount: "464646",
    enrolledCount: "34642",
    collectionCount: "4646",
  },
  {
    name: "Palakkad",
    buildingCount: "64646",
    enrolledCount: "46461",
    collectionCount: "65454",
  },
  {
    name: "Malappuram",
    buildingCount: "46465",
    enrolledCount: "64646",
    collectionCount: "3332",
  },
  {
    name: "Kozhikode",
    buildingCount: "97964",
    enrolledCount: "65464",
    collectionCount: "64645",
  },
  {
    name: "Wayanad",
    buildingCount: "44541",
    enrolledCount: "46464",
    collectionCount: "65464",
  },
  {
    name: "Kannur",
    buildingCount: "454554",
    enrolledCount: "45455",
    collectionCount: "4654",
  },
  {
    name: "Kasaragod",
    buildingCount: "464646",
    enrolledCount: "34642",
    collectionCount: "4646",
  },
];

function Statedash() {
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
          {/* Map Placeholder */}
          <div style={styles.heading}>
            <h3>District-wise Statistics at a Glance</h3>
          </div>

          {/* District Stats */}
          <div style={styles.stats}>
            <div style={styles.headerRow}>
              <div style={styles.cell}>
                <strong>District</strong>
              </div>
              <div style={styles.cell}>
                <strong>No of Buildings</strong>
              </div>
              <div style={styles.cell}>
                <strong>Enrolled Buildings</strong>
              </div>
              <div style={styles.cell}>
                <strong>Collection Count</strong>
              </div>
            </div>
            {districts.map((district, index) => (
              <div key={index} style={styles.row}>
                <div style={styles.cell}>
                  <strong>{district.name}</strong>
                </div>
                <div style={styles.cell}>{district.buildingCount}</div>
                <div style={styles.cell}>{district.enrolledCount}</div>
                <div style={styles.cell}>{district.collectionCount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Data Powered by Information Kerala Mission</p>
        <p>Contact: mail@ikm.gov.in</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    background: "linear-gradient(135deg, #006400, #32CD32)", // Green gradient background
    color: "#fff",
    padding: "40px 20px", // Increased padding for better spacing
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow for depth effect
    borderBottom: "5px solid #004d00", // Border at the bottom for separation
    borderRadius: "10px 10px 0 0", // Rounded corners on top for a softer look
    marginBottom: "0px", // Space between header and content
  },
  title: {
    margin: "0",
    fontSize: "3em", // Larger font size for the title
    fontWeight: "700", // Bold font weight
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Shadow effect for the title text
  },
  subtitle: {
    margin: "10px 0 0",
    fontSize: "1.5em",
    fontWeight: "400", // Lighter font weight for the subtitle
    letterSpacing: "1px", // Slightly spaced letters for clarity
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)", // Subtle shadow effect for the subtitle text
  },
  main: {
    display: "flex",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderRadius: "20px",
  },
  imageCaption: {
    marginTop: "10px",
    fontStyle: "italic",
    color: "#555",
  },
  dashboard: {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  heading: {
    border: "2px solid #aaa", // Added 'solid' for proper border definition
    marginBottom: "5px",
    marginTop: "0", // Removes the top margin/space
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "20px",
  },
  stats: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#388E3C", // Green color for the header row
    color: "#fff", // White text color
    fontWeight: "bold",
    borderRadius: "5px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#e8f5e9",
    borderRadius: "5px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: "1em",
  },
  footer: {
    backgroundColor: "#004d00",
    color: "#fff",
    textAlign: "center",
    padding: "2px",
  },
};

export default Statedash;
