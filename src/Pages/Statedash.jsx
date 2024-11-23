import { styles } from "../Styles";

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
    <div>
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
  );
}
export default Statedash;
