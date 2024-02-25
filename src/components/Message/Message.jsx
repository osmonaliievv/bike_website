// import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Message.scss";
export const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_tv0zd8o", "template_dh7c5iu", form.current, {
        publicKey: "cGBOIGgDwmLl69jsi",
      })
      .then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form className="message__form" ref={form} onSubmit={sendEmail}>
      <h1 className="message__con-us">Contact Us</h1>
      <input type="text" name="from_name" placeholder="Name" />
      <input type="email" name="from_email" placeholder="Email" />
      <label>Message</label>
      <textarea className="message__textarea" name="message" />
      <button className="message__send" type="submit">
        SEND
      </button>
    </form>
  );
};
