import { Checkbox, IconButton } from "@mui/material";
import React from "react";
import "./emailrow.css";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

const EmailRow = ({ title, subject, description, id, time }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

    const openMail = () => {
      dispatch(
        selectMail({
          title, 
          subject, 
          description, 
          id, 
          time
        })
      )
      navigate("/mail")
    }
    return (
    <div onClick={openMail}
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
