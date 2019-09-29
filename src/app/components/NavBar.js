import React from "react";
import { useAuthState } from "../../auth/auth-context";
import { withRouter } from "react-router-dom";
import JoinButton from "./JoinButton";
import { NavLink } from "react-router-dom";
// import SatSymbol from "../../assets/SatSymbol.svg";
import TrusatLogoSmall from "../../assets/TrusatLogoSmall.svg";

function NavBar(props) {
  const catalogFilter = "priorities";
  const { userAddress } = useAuthState();

  return (
    <div className="nav-bar">
      <NavLink className="nav-bar__logo" to="/">
        <div className="nav-bar__sat-title-wrapper">
          {/* <img
            className="nav-bar__sat-symbol"
            src={SatSymbol}
            alt="sat symbol"
          ></img> */}
          <img
            className="nav-bar__trusat-title"
            src={TrusatLogoSmall}
            alt="trusat title"
          ></img>
        </div>
      </NavLink>

      <div className="nav-bar__route-link-wrapper">
        <div
          className={
            props.location.pathname === "/"
              ? "nav-bar__link-wrapper--highlight"
              : "nav-bar__link-wrapper--lowlight"
          }
        >
          <NavLink
            className={
              props.location.pathname === "/"
                ? "nav-bar__link--highlight"
                : "nav-bar__link--lowlight"
            }
            to="/"
          >
            WELCOME
          </NavLink>
        </div>

        <div
          className={
            props.location.pathname.includes("catalog") ||
            // props.location.pathname.includes("object") ||
            props.location.pathname.includes("submit")
              ? "nav-bar__link-wrapper--highlight"
              : "nav-bar__link-wrapper--lowlight"
          }
        >
          <NavLink
            className={
              props.location.pathname.includes("catalog") ||
              // props.location.pathname.includes("object") ||
              props.location.pathname.includes("submit")
                ? "nav-bar__link--highlight"
                : "nav-bar__link--lowlight"
            }
            to={`/catalog/${catalogFilter}`}
          >
            CATALOG
          </NavLink>
        </div>

        {/* // My Profile button only rendered when user is logged in */}
        {userAddress ? (
          <div
            className={
              props.location.pathname === `/profile/${userAddress}`
                ? "nav-bar__link-wrapper--highlight"
                : "nav-bar__link-wrapper--lowlight"
            }
          >
            <NavLink
              className={
                props.location.pathname === `/profile/${userAddress}`
                  ? "nav-bar__link--highlight"
                  : "nav-bar__link--lowlight"
              }
              to={`/profile/${userAddress}`}
            >
              MY PROFILE
            </NavLink>
          </div>
        ) : null}

        <div
          className={
            props.location.pathname === "/about"
              ? "nav-bar__link-wrapper--highlight"
              : "nav-bar__link-wrapper--lowlight"
          }
        >
          <NavLink
            className={
              props.location.pathname === "/about"
                ? "nav-bar__link--highlight"
                : "nav-bar__link--lowlight"
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </div>

        <div
          className={
            props.location.pathname === "/how"
              ? "nav-bar__link-wrapper--highlight"
              : "nav-bar__link-wrapper--lowlight"
          }
        >
          <NavLink
            className={
              props.location.pathname === "/how"
                ? "nav-bar__link--highlight"
                : "nav-bar__link--lowlight"
            }
            to="/how"
          >
            <p>HOW TO</p>
          </NavLink>
        </div>
      </div>

      {/* Show Join button when user is not logged in */}
      {!userAddress ? (
        <NavLink className="app__nav-link" to="/login">
          <JoinButton />
        </NavLink>
      ) : (
        // Invisible element to ensure nav bar links stays center of header component
        <div style={{ width: "100px" }}></div>
      )}
    </div>
  );
}

export default withRouter(NavBar);
