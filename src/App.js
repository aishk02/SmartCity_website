import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Transport from "./routes/Transport";
import Eat from "./routes/Eat";
import Relax from "./routes/Relax";
import Travel from "./routes/Travel";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/transport" element={<Transport />} />
      </Routes>
    </div>
  );
}
