import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "../../utils/functions";
import Notification from "../ui/notification";
import AppError from "../../utils/appError";

const defaultValues = {
  email: "",
  name: "",
  message: "",
};

const yupSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email address."),
  name: Yup.string().required("Please enter your name"),
  message: Yup.string().required("Please enter your message"),
});

const ContactForm = function (props) {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(yupSchema),
  });

  useEffect(() => {
    let timer;
    if (/^success|error$/.test(requestStatus)) {
      timer = setTimeout(() => {
        setRequestStatus(undefined);
        setRequestError(undefined);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [requestStatus]);

  const sendContactDetails = async function (contactData) {
    const response = await axios.post("/api/contact", contactData);
    if (response.data.status !== "success") {
      throw new AppError(response.data.message || "Something went wrong", 500);
    }
  };

  const submitHandler = async function (data) {
    try {
      setRequestStatus("pending");
      await sendContactDetails(data);
      setRequestStatus("success");

      reset();
      // if (isEmpty(Object.keys(errors))) { // flash alert message }
    } catch (err) {
      console.log(err);
      if (isEmpty(err?.response?.data?.errors)) {
        setRequestStatus("error");
        return;
      }
      Object.entries(err.response.data.errors).forEach((error) =>
        setError(error[0], {
          type: "input",
          message: error[1].msg,
        })
      );

      setRequestStatus("error");
    }
  };

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending Message",
      message: "Your message is on it's way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent successfully.",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: "Request failed.",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={classes.controls}>
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="text" {...register("email")} />
            {errors?.email && (
              <p className={classes.errorText}>{errors?.email.message}</p>
            )}
          </div>
          <div className="control">
            <label htmlFor="name">Your Name</label>
            <input type="text" {...register("name")} />
            {errors?.name && (
              <p className={classes.errorText}>{errors?.name.message}</p>
            )}
          </div>
        </div>

        <div className="control">
          <label htmlFor="message">Your Message</label>
          <textarea {...register("message")} rows="5"></textarea>
          {errors?.message && (
            <p className={classes.errorText}>{errors?.message.message}</p>
          )}
        </div>

        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
};

export default ContactForm;
