import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className='navbar navbar-expand-lg py-4'
      style={{ backgroundColor: "#2C3E50" }}>
      <div className='container'>
        <NavLink
          className='navbar-brand fw-bold text-white fs-3 text-uppercase'
          to='/'>
          Start Framework
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            {["about", "portfolio", "contact"].map((route) => (
              <li className='nav-item' key={route}>
                <NavLink
                  to={route}
                  className={({ isActive }) =>
                    `nav-link fw-bold px-3 text-white ${
                      isActive ? "rounded" : ""
                    }`
                  }
                  style={({ isActive }) =>
                    isActive ? { backgroundColor: "#1ABC9C" } : {}
                  }>
                  {route.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
