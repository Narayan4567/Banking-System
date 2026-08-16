import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>BankApp</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/accounts">Accounts</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;