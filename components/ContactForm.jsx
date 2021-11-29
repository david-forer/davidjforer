import React, { useState } from "react";
import axios from "axios";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xnqlejdz",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <main>
      <div className="xl:flex lg:flex bg-indigo-700 p-1 xl:rounded mt-12  mb-24 md:w-3/4 mx-auto lg:w-1/2">
        <div className="w-full bg-white h-full rounded ">
          <form
            onSubmit={handleOnSubmit}
            className="py-5 xl:px-12 px-4 xl:w-3/4 lg:w-full"
          >
            <h1 className="text-4xl text-gray-800 font-extrabold mb-1 ">
              Please Enter Details Below
            </h1>
            <p className="text-xl text-gray-800 font-semibold mb-6">
              {" "}
              We will respond to you within 1 business day
            </p>
            <div className="block xl:flex w-full flex-wrap justify-between mb-6">
              <div className="xl:w-2/4 max-w-xs mb-6 xl:mb-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="firstName"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.firstName}
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 w-full flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
              <div className="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col">
                  <label
                    htmlFor="lastName"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.lastName}
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
            </div>
            <div className="block xl:flex w-full justify-between flex-wrap">
              <div className="xl:w-2/4 max-w-xs mt-6 xl:mt-0">
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.email}
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
              <div className="xl:w-2/4 max-w-xs xl:flex xl:justify-end">
                <div className="flex flex-col mt-6 xl:mt-0">
                  <label
                    htmlFor="phone"
                    className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="phone"
                    name="_replyto"
                    onChange={handleOnChange}
                    required
                    value={inputs.phone}
                    className="focus:outline-none focus:border focus:border-indigo-700 font-normal xl:w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-6">
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-800 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  className="text-sm border-gray-300 border mb-6 rounded py-2 outline-none resize-none px-3 focus:outline-none focus:border focus:border-indigo-700"
                  rows={5}
                />
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="focus:outline-none bg-indigo-700 mb-1 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Submit"
                      : "Submitted"
                    : "Submitting..."}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};
