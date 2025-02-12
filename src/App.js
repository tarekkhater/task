import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dragger from "./components/Dragging/Dragger";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dragger />} />
      </Routes>
    </Router>
  );
}

export default App;
