import React, { useState } from "react";
import "./ContactForm.css";
import "../Buttons/BtnSvart";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  //form handling - updates the state as the user types
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);

    //clear prev messages
    setError(null);
    setSuccess(null);

    //validation (all fields are required)
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required!");
      return;
    }
    //simulate a successfull form submission
    setSuccess("Message sent successfully!");

    //clear all fields efter successfully sent message
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div>
      <form className="contact_form" onSubmit={handleSubmit}>
        <h2>Contact us via email</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className="textarea"
        />
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit" className="btn-svart">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
