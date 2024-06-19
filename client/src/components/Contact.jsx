import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission logic, e.g., send data to backend, validate inputs, etc.
    console.log(`Email: ${email}, Description: ${description}`);
    // Reset the form after submission
    setEmail("");
    setDescription("");
  };

  return (
    <div className="rounded-md h-fit w-[90vw] md:w-[85vw] lg:w-[75vw] xl:w-[55vw]  m-auto mb-12 bg-pinky text-white flex items-center">
      <div className="hidden md:block h-[430px]">
        <img
          src="/contactImg.jpg"
          className="w-full h-full rounded-l-md"
          alt="img"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex-1 w-full h-full m-auto py-6 px-10 sm:px-16 md:px-6 lg:px-16">
        <h1 className="text-4xl font-bold text-center mb-3">Contact Us</h1>
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-400 h-12 text-zinc-900"
            required
          />
        </div>

        {/* Description field */}
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border resize-none border-gray-300 rounded focus:outline-none focus:border-pink-400 h-32 text-zinc-900"
            required
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            id="btn"
            className="px-8 py-3 font-semibold bg-white text-pinky rounded hover:text-white before:rounded focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
