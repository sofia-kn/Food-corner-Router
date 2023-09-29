import React, { useState } from "react";
import Button from "./../components/Button";
import "./Contact.css";
// import './../components/Button.css'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setSubmitted(true)
    setName("");
    setEmail("");
    setTextarea("");
    // console.log('sub');
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const textHandler = (e) => {
    setTextarea(e.target.value);
  };

  return (
    <div className="contact__wrapper">
      <div className="contact__image">
        <img src="images/food9.jpg" alt="image" />
      </div>
      <div className="contact__form">
        <h2>Contact Us</h2>
        <form>
          <ul className="contact__form--list">
            <li className="contact__form--item">
              <label htmlFor="fname">Full Name</label>
              <input
                onChange={nameHandler}
                value={name}
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter full name..."
              />
              {name.length === 0 && submitted && (
                <span className="error">Please enter your full name</span>
              )}
            </li>
            <li className="contact__form--item">
              <label htmlFor="email">Email</label>
              <input
                onChange={emailHandler}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
              />
              {submitted && email.length === 0 && (
                <span className="error">Please enter your email</span>
              )}
            </li>
            <li className="contact__form--item">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={textHandler}
                value={textarea}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter Message..."
              ></textarea>
            </li>
          </ul>
          <div className="btn__wrapper" onClick={clickHandler}>
            <button className="btn form__btn">
              <a href="" className="btn__link">
                Send Message
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
