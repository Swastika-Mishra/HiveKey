import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import Notification from "../../assets/notification.png";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      id="auth_button"
      onClick={() =>
        loginWithRedirect({
          redirectUri: window.location.origin + "/dashboard",
        })
      }
    >
      Log In
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      id="auth_button"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <nav className={isAuthenticated ? "auth": "non-auth"}>
      <h2 style={{margin: "5px",cursor: "pointer"}} onClick={() => isAuthenticated ? navigate("/dashboard") : navigate("/")}>HiveKey</h2>
      <div className="auth-nav">
        {isAuthenticated &&
          <button
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          >
          <img
            src={Notification}
            alt="Notifications"
            style={{ width: "24px", height: "24px" }}
          />
          </button>
        }
        {isAuthenticated && 
          <button
            style={{
              background: "white",
              color: "black",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/profile")}
            >
            Profile
          </button>
        }
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </nav>
  );
};

export default Navbar;
