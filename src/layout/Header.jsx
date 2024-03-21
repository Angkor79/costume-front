import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const guestNav = [
  { to: "/", text: "Login" },
  { to: "/register", text: "Register" },
];

const userNav = [{ to: "/", text: "Home" }];

export default function Header() {
  const { user, logout } = useAuth();
  const finalNav = user?.id ? userNav : guestNav;
  const isAdmin = user?.role === "admin";

  const navigate = useNavigate();

  const hdlLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white ">
      <div
        className="navbar bg-base-100"
        style={{ background: "linear-gradient(to top, #FFFFFF, #FF0059 )" }}
      >
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            Hello, {user?.id ? user.username : "Guest"}
          </a>
        </div>
        <div className="flex-none">

        {user?.id && !isAdmin && ( 
            <div className="form-control">
              <input type="text" placeholder="Search" className="input input-bordered h-9 w-24 md:w-auto" />
            </div>
          )}

    
          <ul className="menu menu-horizontal px-1">
            {finalNav.map((el) => (
              <li key={el.to}>
                <Link to={el.to}>{el.text}</Link>
              </li>
            ))}

       {user?.id && !isAdmin && (
              <>
                <li>
                  <Link to="/cart">
                    Cart
                  </Link>
                </li>
                </>
                )}



              
            {user?.id && (
                <li>
                  <Link to="/profile">
                    Profile
                  </Link>
                </li>
            
            )}

            {user?.id && (
              <li>
                <Link to="#" onClick={hdlLogout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
