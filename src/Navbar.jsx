import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-yellow navbar-light">
      <div className="container-fluid d-flex justify-content-between">
        {/* Brand on the left */}

        <img
          src="Frame 5.svg"
          alt="Brand Logo"
          style={{ width: "150px", height: "auto" }}
        />

        {/* Links in the center */}
        <div className="mx-auto">
          <ul className="navbar-nav d-flex flex-row gap-3">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold active-link" : "nav-link fw-bold"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold active-link" : "nav-link fw-bold"
                }
                to="/about"
              >
                TeamUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold active-link" : "nav-link fw-bold"
                }
                to="/team"
              >
                Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link fw-bold active-link" : "nav-link fw-bold"
                }
                to="/tournament"
              >
                Tournament
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
