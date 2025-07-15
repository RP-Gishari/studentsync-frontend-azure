import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./pages/StudentList";
import "./App.css";
import AddStudent from "./pages/AddStudent";
import Hello from "./Hello";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/AddStudent" element={<StudentList />} />
          </Routes>
        </main>
        <AddStudent />
        <Hello />
      </div>
    </Router>
  );
};

export default App;
