import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const isDarkMode = theme.state.darkMode;
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        formRef.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contactFormStyles = {
    padding: "0 3rem 0 3rem",
    display: "flex",
    height: "80vh",
    marginTop: "4rem",
    paddingTop: "3rem",
  };

  const rightContainerStyles = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    flex: "1",
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
  };

  const inputStyles = {
    width: "20rem",
    height: "2rem",
    padding: "0.3em",
    outline: "none",
    border: `2px solid ${isDarkMode ? "white" : "var(--orange)"}`,
    borderRadius: "8px",
    fontSize: "16px",
  };

  const textareaStyles = {
    height: "4rem",
    width: "20rem",
    padding: "0.3em",
    outline: "none",
    border: `2px solid ${isDarkMode ? "white" : "var(--orange)"}`,
    borderRadius: "8px",
    fontSize: "16px",
  };

  const blurStyles = {
    top: "1rem",
    left: "8rem",
    background: isDarkMode ? "#ABF1FF94" : "var(--purple)",
  };

  return (
    <div className="contact-form" id="contact" style={contactFormStyles}>
      <div className="left-container">
        <div className="header-text">
          <span style={{ color: isDarkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1" style={blurStyles}></div>
        </div>
      </div>
      <div className="right-container" style={rightContainerStyles}>
        <form ref={formRef} onSubmit={sendEmail} style={formStyles}>
          <input
            type="text"
            name="user_name"
            className="input-field"
            placeholder="Name"
            style={inputStyles}
          />
          <input
            type="email"
            name="user_email"
            className="input-field"
            placeholder="Email"
            style={inputStyles}
          />
          <textarea
            name="message"
            className="input-field"
            placeholder="Message"
            style={textareaStyles}
          />
          <input type="submit" value="Send" className="submit-button" />
          <span>{isSent && "Thanks for Contacting me"}</span>
          <div className="blur c-blur1" style={blurStyles}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
