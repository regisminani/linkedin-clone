import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HeaderOption from "./HeaderOption";
import { SupervisorAccount } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt=""
        />
        <div className="header__search">
          <SearchOutlinedIcon />
          <input placeholder="Search" type="" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar={true} title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
