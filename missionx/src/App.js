import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import ProjectLibrary from "./Pages/studentProjectLibrary.js";
import ProfileViewer from "./Pages/studentProfileViewer.js";
import ProjectPage from "./components/studentProjectLibrary/ProjectPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProjectLibrary />} />
        <Route path="/2" element={<ProfileViewer />} />
        <Route path="/3" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
