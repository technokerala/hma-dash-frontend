import { styles } from "../Styles";
import { useParams } from "react-router-dom";
// import districts from "./Statedash";
const localbody = [
  {
    dist_id: 50001,
    name: "Attingal",
    buildingCount: "454554",
    enrolledCount: "45455",
    subscriptionCount: "45455",
    collectionCount: "4654",
  },
  {
    dist_id: 50001,
    name: "Varkala",
    buildingCount: "464646",
    enrolledCount: "34645",
    subscriptionCount: "45455",
    collectionCount: "4646",
  },
  {
    dist_id: 50001,
    name: "Nedumangadu",
    buildingCount: "64646",
    enrolledCount: "4646",
    subscriptionCount: "45455",
    collectionCount: "65454",
  },
  {
    dist_id: 50001,
    name: "Neyyattinkara",
    buildingCount: "46465",
    enrolledCount: "64646",
    subscriptionCount: "45455",
    collectionCount: "3332",
  },
  {
    dist_id: 50001,
    name: "Thiruvananthapuram",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    dist_id: 50002,
    name: "Kollam",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    dist_id: 50002,
    name: "Paravur",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    dist_id: 50002,
    name: "Karunagappally",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    dist_id: 50002,
    name: "Kottarakkara",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
  {
    dist_id: 50002,
    name: "Punalur",
    buildingCount: "97964",
    enrolledCount: "65464",
    subscriptionCount: "45455",
    collectionCount: "64645",
  },
];

function Districtdash() {
  const { district_id } = useParams();
  // const district = districts.find((district) => Number(district.id) === Number(district_id));
  return (
    <div style={styles.dashboard}>
      <div style={styles.heading}>
        <h3>Localbody-wise Statistics at a Glance </h3>
      </div>
      {/* {district ? (
        <div key={district.id}>
          <strong>{district.name}</strong>
        </div>
      ) : null
      } */}
      <div style={styles.stats}>
        <div style={styles.headerRow}>
          <div style={styles.cell}>
            <strong>Local body</strong>
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
        {localbody.map((localbody, index) =>
          Number(district_id) === Number(localbody.dist_id) ? (
            <div key={index} style={styles.row}>
              <div style={styles.cell}>
                <strong>{localbody.name}</strong>
              </div>
              <div style={styles.cell}>{localbody.buildingCount}</div>
              <div style={styles.cell}>{localbody.enrolledCount}</div>
              <div style={styles.cell}>{localbody.subscriptionCount}</div>
              <div style={styles.cell}>{localbody.collectionCount}</div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
export default Districtdash;
