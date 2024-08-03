import React from "react";
import "./contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48435a64-5888-4030-b5eb-5ec326d6c23b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div id="contact" className="contact">
      <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme} alt="" />
        </div>
        <div className="conatct-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, rerum!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="" /> <p>gautamraj7569@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="" /> <p>+91-6202914630</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="" />{" "}
                <p>Patna Bihar pincode-800026</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit} action="" className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder="Enter Your Email Id" />
            <label htmlFor="">Write Your Message Here</label>
            <textarea name="message" id="" placeholder="Enter Your Message" rows="8"></textarea>
            <button className="contact-submit" type="submit">SEND</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
