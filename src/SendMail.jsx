import React from "react";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendmail">
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendmail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="text"
          placeholder="To"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendmail__error">Recipient is Required!</p>}

        <input
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendmail__error">Subject is Required!</p>
        )}

        <input
          type="text"
          placeholder="Message"
          className="sendmail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendmail__error">Message is Required!</p>
        )}

        <div className="sendmail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendmail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
