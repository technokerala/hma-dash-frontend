import { styles } from "../Styles";
import { Link } from "react-router-dom";

const districts = [
  {
    id : 50001,
    name: "Thiruvananthapuram",
    buildingCount: "454554",
    enrolledCount: "45455",
    subscriptionCount: "45455",
    collectionCount: "4654",
  },
  {
    id : 50002,
    name: "Kollam",
    buildingCount: "464646",
    enrolledCount: "34645",
    subscriptionCount: "45455",
    collectionCount: "4646",
  },
  {
    id : 50003,
    name: "Pathanamthitta",
    buildingCount: "64646",
    enrolledCount: "4646",
    subscriptionCount: "45455",
    collectionCount: "65454",
  },
  {
    id : 50004,
    name: "Alappuzha",
    buildingCount: "46465",
    enrolledCount: "64646",
    subscriptionCount: "45455",
    collectionCount: "3332",
  },
  {
    id : 50005,
    name: "Kottayam",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    id : 50006,
    name: "Idukki",
    buildingCount: "44541",
    enrolledCount: "46464",
    subscriptionCount: "45455",
    collectionCount: "65464",
  },
  {
    id : 50007,
    name: "Eranakulam",
    buildingCount: "454554",
    enrolledCount: "45455",
    subscriptionCount: "45455",
    collectionCount: "4654",
  },
  {
    id : 50008,
    name: "Thrissur",
    buildingCount: "464646",
    enrolledCount: "34642",
    subscriptionCount: "45455",
    collectionCount: "4646",
  },
  {
    id : 50009,
    name: "Palakkad",
    buildingCount: "64646",
    enrolledCount: "46461",
    subscriptionCount: "45455",
    collectionCount: "65454",
  },
  {
    id : 50010,
    name: "Malappuram",
    buildingCount: "46465",
    enrolledCount: "64646",
    subscriptionCount: "45455",
    collectionCount: "3332",
  },
  {
    id : 50011,
    name: "Kozhikode",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    id : 50012,
    name: "Wayanad",
    buildingCount: "44541",
    enrolledCount: "46464",
    subscriptionCount: "45455",
    collectionCount: "65464",
  },
  {
    id : 50013,
    name: "Kannur",
    buildingCount: "454554",
    enrolledCount: "45455",
    subscriptionCount: "45455",
    collectionCount: "4654",
  },
  {
    id : 50014,
    name: "Kasaragod",
    buildingCount: "464646",
    enrolledCount: "34642",
    subscriptionCount: "45455",
    collectionCount: "4646",
  },
];

function Statedash() {
  return (
    <div style={styles.dashboard}>
      <div style={styles.heading}>
        <h3>District-wise Statistics at a Glance</h3>
      </div>
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
            <strong>Subscription Count</strong>
          </div>
          <div style={styles.cell}>
            <strong>Collection Count</strong>
          </div>
        </div>
        {districts.map((district) => (
          <Link
           // to={"/districtdash"}
              to={`/districtdash/${district.id}`} 
              style={{ textDecoration: "none", color: "inherit" }}
              //key={district.id}
          >
            <div style={styles.row}>
              <div style={styles.cell}>
                <strong>{district.name}</strong>
              </div>
              <div style={styles.cell}>{district.buildingCount}</div>
              <div style={styles.cell}>{district.enrolledCount}</div>
              <div style={styles.cell}>{district.subscriptionCount}</div>
              <div style={styles.cell}>{district.collectionCount}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Statedash;
