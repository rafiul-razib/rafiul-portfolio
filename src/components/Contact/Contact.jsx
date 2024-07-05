import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xucnpjf", "template_s88hhpy", form.current, {
        publicKey: "xw3RPL4bxy3HYjJ6p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-white mt-20 text-center">Contact Me</h1>
      <div className="divider"></div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-control">
          <label className="label">Name</label>
          <input
            className="input input-accent"
            required
            type="text"
            name="user_name"
          />
          <label className="label">Email</label>
          <input
            className="input input-accent"
            required
            type="email"
            name="user_email"
          />
          <label className="label">Message</label>
          <textarea
            className="textarea textarea-accent"
            placeholder="Type your message!"
            name="message"
          />
          <br />
          <input
            className="btn btn-outline"
            required
            type="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
