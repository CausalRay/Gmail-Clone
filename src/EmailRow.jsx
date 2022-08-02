import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./emailrow.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import { useNavigate } from "react-router-dom";

const EmailRow = ({ title, subject, description, id, time }) => {
  
  const navigate = useNavigate()

    return (
    <div onClick={() => navigate("/mail")}
    className="email__row">
      <div className="email__row--options">
        <Checkbox />
        <IconButton>
            <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>

      </div>

      <div className="email__row--title">
        <h3>{title}</h3>
      </div>

      <div className="email__row--message">
      <h4>{subject}{" "}
      <span className="email__row--description"> - 
      {description}
      </span>
      </h4>
      </div>

      <p className="email__row--time">
      {time}
      </p>

     

    </div>
  );
};

export default EmailRow;
