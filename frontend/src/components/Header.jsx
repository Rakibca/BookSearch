import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from 'react-redux'; import { logout,
// reset } from '../features/auth/authSlice';

function Header() {


  return (
    <header className="header">
      <div className="logo">
        <Link to="/">BookStore</Link>
      </div>
      <ul>
        {/* {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : ( */}
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        {/* )} */}
      </ul>
    </header>
  );
}

export default Header;