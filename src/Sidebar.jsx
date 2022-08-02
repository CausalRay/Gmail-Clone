import { Button, IconButton } from "@mui/material";
import React from "react";
import "./sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import NearMeIcon from "@mui/icons-material/NearMe";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';


function Sidebar() {

  const dispatch = useDispatch();

  return (
        <div className = "sidebar">
            <Button
                startIcon = {<AddIcon fontSize = "Large" />}
                className = "sidebar__compose"
                onClick = {() => dispatch(openSendMessage())}
            >
                Compose
            </Button>

      <SidebarOption
        Icon={InboxIcon}
        number={54}
        title="Inbox"
        selected={true}
      />

      <SidebarOption Icon={StarIcon} number={54} title="Starred" />

      <SidebarOption Icon={AccessTimeIcon} number={54} title="Snoozed" />

      <SidebarOption Icon={LabelImportantIcon} number={54} title="Important" />

      <SidebarOption Icon={NearMeIcon} number={54} title="Sent" />

      <SidebarOption Icon={InsertDriveFileIcon} number={54} title="Drafts" />

      <SidebarOption Icon={ExpandMoreIcon} number={54} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footer--icons">
            <IconButton>
                <PersonIcon />
            </IconButton>

            <IconButton>
                <DuoIcon />
            </IconButton>

            <IconButton>
                <PhoneIcon />
            </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
