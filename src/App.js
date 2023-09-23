import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignIn, Dashboard } from "./pages/page-index";

function App() {
  return (
    <div className="text-lg">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
