import React from "react";

const Home = () => {
  return (
    <div className="p-10 ">
      <div className="flex justify-between items-center rounded-4xl bg-[#E7FAFE] h-140 relative">
        <div className=" w-155 h-full p-10 flex flex-col gap-6">
          <div className="w-39 h-11.25 rounded-full bg-white flex justify-center items-center font-semibold gap-2">
            <i className="ri-bowl-fill"></i>
            Hot Recipes
          </div>

          <h1 className="text-6xl font-semibold">
            Spicy delicious <br />
            chicken wings
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            illum voluptatem? Repudiandae quo odit laboriosam! Ducimus inventore
            unde, ex ratione laudantium earum harum.
          </p>
          <div className="flex gap-5">
            <div className="w-34.75 h-10 rounded-full bg-slate-300 flex justify-center items-center gap-2">
              <i className="ri-timer-fill text-xl"></i>
              30 Minutes
            </div>
            <div className="w-34.75 h-10 rounded-full bg-slate-300 flex justify-center items-center gap-2">
              <i className="ri-restaurant-fill text-xl"></i>
              Chicken
            </div>
          </div>

          <div className="flex justify-between mt-10 ">
            <div className="flex gap-3">
              <img
                src="./images/user.png"
                alt="user_pic"
                className="w-12.5 h-12.5"
              />
              <div className="flex flex-col">
                <h3 className="font-bold">John Smith</h3>
                <p className="text-gray-400">19 Jully 2026</p>
              </div>
            </div>
            <button className="w-50 h-15 bg-black text-white rounded-2xl flex justify-center items-center gap-3">
              View Recipies <i className="ri-play-circle-line text-xl"></i>
            </button>
          </div>
        </div>

        <img
          src="./images/thumb.png"
          alt="thumb"
          className="w-37.5 h-37.5 absolute top-10 left-150 "
        />

        <img
          src="./images/hero.png"
          alt="img"
          className="rounded-r-4xl w-150 h-140"
        />
      </div>

      <div className="bg-red-200 h-85.5 mt-20">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">Categories</h1>
          <button className="bg-[#E7FAFE] rounded-xl text-xl px-5 py-3 font-semibold hover:shadow-lg hover:cursor-pointer">
            View All Categories
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-3 gap-4">
        {Array(8)
          .fill("s")
          .map((item, index) => (
            <div className="w-100 bg-[#E7FAFE] h-108.5 flex flex-col items-start gap-4 p-2 mt-10">
              <img
                src="./images/food01.png"
                alt="food"
                className="rounded-2xl w-full"
              />
              <h1 className="text-3xl">
                Big and Juicy Wagyu Beef Cheeseburger
              </h1>
              <div className="flex gap-10">
                <div>
                  <i className="ri-timer-fill text-xl mr-2"></i>
                  30 Minutes
                </div>
                <div>
                  <i className="ri-restaurant-fill text-xl mr-2"></i>
                  Chicken
                </div>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Home;
