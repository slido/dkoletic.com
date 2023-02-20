import { useRef, useState } from "react";
import styles from "../style";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const CTA = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "service_rb9rlof",
        "template_s2itajk",
        form.current,
        "vfZ4Mivlm04GmjgVr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setThanks(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [thanks, setThanks] = useState(false);

  return (
    <section
      id="contact"
      className={`  sm:flex-row flex-col  relative items-start flex w-100 mt-[100px]`}
    >
      <div className=" lg:w-[50%]">
        <h2 className={styles.heading2}>Contact</h2>
        <p className={`${styles.paragraph}  mt-5`}>
          If you have any business enquiries or questions, <br />
          feel free to contact me
        </p>
      </div>
      <form
        className="xs:w-full lg:w-[50%]  xs:mt-[20px]"
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className="p-0 m-0">
          <li className="relative md:flex sm:block">
            <span className=" xs:mb-[20px] sm:mb-[10px] block md:w-[49%]">
              <input
                {...register("userName", { required: true })}
                name="userName"
                type="text"
                placeholder="Name"
                className="p-[10px] bg-white w-[49%] mr-[10px] rounded-[10px] xs:w-full"
                aria-invalid={errors.userName ? "true" : "false"}
              />
              {errors.userName?.type === "required" && (
                <p
                  role="alert"
                  className="absolute left-0  text-[11px] text-[red]"
                >
                  * Name is required
                </p>
              )}
            </span>
            <span className=" block md:w-[49%] md:ml-[10px] relative">
              <input
                {...register("userEmail", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "* Entered value does not match email format",
                  },
                })}
                name="userEmail"
                type="email"
                placeholder="E-mail"
                className="p-[10px] bg-white w-[49%] rounded-[10px] xs:w-full"
                aria-invalid={errors.userEmail ? "true" : "false"}
              />
              {errors.userEmail && (
                <p
                  role="alert"
                  className="absolute right-0 xs:left-0 text-[11px] text-[red]"
                >
                  {errors.userEmail.message === "required"
                    ? "* Email is required"
                    : errors.userEmail.message}
                </p>
              )}
            </span>
          </li>
          <li className="relative">
            <textarea
              {...register("userMessage", { required: true })}
              rows="4"
              name="userMessage"
              placeholder="Message.."
              className="p-[10px] bg-white w-[100%] mt-5 rounded-[10px]"
              aria-invalid={errors.userMessage ? "true" : "false"}
            ></textarea>
            {errors.userMessage?.type === "required" && (
              <p
                role="alert"
                className="absolute left-0  text-[11px] text-[red]"
              >
                * Message is required
              </p>
            )}
          </li>
          <li>
            <input
              type="submit"
              value="Submit"
              className={`uppercase mt-5 p-4 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none cursor-pointer ${styles}`}
            />
          </li>
          <li className="mt-[20px] text-[red]">
            {thanks ? "Your message has been sent! Thanks!" : null}
          </li>
        </ul>
      </form>
    </section>
  );
};

export default CTA;
