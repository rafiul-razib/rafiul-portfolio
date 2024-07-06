import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tfjgats", "template_s88hhpy", form.current, {
        publicKey: "xw3RPL4bxy3HYjJ6p",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your feedback has been recorded",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "Error",
            title: "An Error Ocurred",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="mt-28" name="contact">
      <h1 className="text-3xl lg:text-4xl  mt-20 text-center">Contact Me</h1>
      <div className="divider"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-4">
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
                placeholder="Leave your message!"
                name="message"
              />
              <br />
              <input
                className="btn btn-accent"
                required
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className=" text-xl lg:text-3xl font-semibold mb-4 lg:mb-10">
            Find Me On
          </h1>

          <div className="flex justify-center items-center gap-4">
            <a href="https://web.facebook.com/rafiul.razib" target="blank">
              <FaFacebook className="text-6xl hover:text-blue-400" />
            </a>
            <a href="https://github.com/rafiul-razib" target="blank">
              <FaGithub className="text-6xl hover:text-blue-400" />
            </a>
            <a href="https://www.linkedin.com/in/rafiul-habib/" target="blank">
              <FaLinkedin className="text-6xl hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
