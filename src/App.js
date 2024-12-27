import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Sidebar from "./Pages/Sidebar";
import { styles } from "./Styles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Statedash from "./Pages/Statedash";
import Districtdash from "./Pages/Districtdash";
function App() {
  return (
    <div className="App">
      <Router>
        <div style={styles.container}>
          <Home />
          <div style={styles.main}>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Statedash />} exact />
              {/* <Route path="/districtdash" element={<Districtdash />} /> */}
              <Route path="/districtdash/:district_id" element={<Districtdash />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
