import { useState } from "react";
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: var(--black);
`;

const ContactForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: var(--aquamarine);
  color: var(--black);
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  height: 100px;
  width: 50%;
  background-color: var(--aquamarine));
  color: var(--black);
`;

const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: var(--aquamarine);
  color: var(--black);
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 12px;
`;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = { name: "", email: "", message: "" };

    if (!name) errors.name = "Name is required.";
    if (!email) errors.email = "Email is required.";
    if (!validateEmail(email)) errors.email = "Invalid email address.";
    if (!message) errors.message = "Message is required.";

    if (errors.name || errors.email || errors.message) {
      setErrors(errors);
    }
  };

  return (
    <ContactContainer>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
        <TextArea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
        <SubmitButton type="submit">Send</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
