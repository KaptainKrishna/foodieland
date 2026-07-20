import React from "react";

const Inbox = () => {
  return (
    <div className="bg-[#E7FAFE] p-3 h-110.5 rounded-4xl flex items-center justify-center relative overflow-hidden">
      <div className="flex flex-col gap-7 items-center justify-center w-155">
        <h1 className="font-semibold text-5xl">Deliciousness to your inbox</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          recusandae saepe repudiandae eligendi hic ducimus unde aliquid
          expedita
        </p>

        <div className="flex items-center bg-white rounded-xl p-2 w-120">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-1 px-5 py-3 outline-none"
          />

          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </div>

      <img
        src="./images/one.png"
        alt=""
        className="absolute w-100 h-100 -bottom-20 -left-10 rotate-[-20deg]"
      />
      <img
        src="./images/food20.png"
        alt=""
        className="absolute w-100 h-100 -bottom-30 -right-10 rotate-[-10deg]"
      />
    </div>
  );
};

export default Inbox;
