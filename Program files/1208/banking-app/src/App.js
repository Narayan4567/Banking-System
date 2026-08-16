import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import About from "./pages/About";
function App() {
  const balance = useSelector((state) => state.balance);
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>Banking Application</h1>
        <h2>Available Balance: ${balance}</h2>
        <nav
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/about">About</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;