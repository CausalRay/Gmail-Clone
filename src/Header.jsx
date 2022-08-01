import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        ></img>
      </div>

      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <TuneIcon className="header__tuneIcon" />
      </div>

      <div className="header__right">
        <IconButton >
          <HelpOutlineIcon className="icons"/>
        </IconButton>

        <IconButton >
          <SettingsIcon className="icons"/>
        </IconButton>

        <IconButton >
          <AppsIcon className="icons"/>
        </IconButton>

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
