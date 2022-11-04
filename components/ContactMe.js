import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactMe() {
  const { register, handleSubmit, watch, formState } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:mamunahmedusa@gmail?subject=${data.subject}&body=HI, My name is ${data.name}. ${data.message} (${data.email})`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>

      <div className=" flex flex-col space-y-10 ">
        <h4 className=" text-4xl font-semibold text-center ">
          I have got just what you need.{" "}
          <span className=" decoration-[#F7AB0A]/50 underline ">
            Lets Talk.
          </span>
        </h4>
        <div className=" space-y-10  ">
          <div className=" flex items-center space-x-5 justify-center ">
            <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>MamunAhmed@protonmail.com</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center ">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>+8801623420265</p>
          </div>
          <div className=" flex items-center space-x-5 justify-center ">
            <MapPinIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p>Dhaka, Mirpur 10, Senpara porbota, 328/A</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className=" flex space-x-2 ">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
