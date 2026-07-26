import React from "react";

const Home = () => {
  const category = [
    {
      img: "/images/category-01.png",
      name: "Breakfast",
      bg: "bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE]",
    },
    {
      img: "/images/category-02.png",
      name: "Vegan",
      bg: "bg-gradient-to-r from-[#F0FDF4] to-[#DCFCE7]",
    },
    {
      img: "/images/category-03.png",
      name: "Meat",
      bg: "bg-gradient-to-r from-[#FFF1F2] to-[#FFE4E6]",
    },
    {
      img: "/images/category-04.png",
      name: "Dessert",
      bg: "bg-gradient-to-r from-[#FFFBEB] to-[#FEF3C7]",
    },
    {
      img: "/images/category-05.png",
      name: "Lunch",
      bg: "bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9]",
    },
    {
      img: "/images/category-06.png",
      name: "Chocolate",
      bg: "bg-gradient-to-r from-[#F0FCFF] to-[#DFF8FF]",
    },
  ];

  const recipes = [
    {
      img: "/images/food01.png",
      name: " Big and Juicy Wagyu Beef Cheeseburger",
    },
    {
      img: "/images/food02.png",
      name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
    {
      img: "/images/food03.png",
      name: "Strawberry Oatmeal Pancake with Honey Syrup",
    },
    {
      img: "/images/food04.png",
      name: "Fresh and Healthy Mixed Mayonnaise Salad",
    },
    {
      img: "/images/food05.png",
      name: "Chicken Meatballs with Cream Cheese",
    },
    {
      img: "/images/food06.png",
      name: "Fruity Pancake with Orange & Blueberry",
    },
    {
      img: "/images/food07.png",
      name: "The Best Easy One Pot Chicken and Rice",
    },
    {
      img: "/images/food10_azydtd.png",
      name: "Fresh and Healthy Mixed Mayonnaise Salad",
    },
    {
      img: "/images/food02.png",
      name: "Fresh Lime Roasted Salmon with Ginger Sauce",
    },
  ];
  return (
    <div className="p-10 ">
      <div className="md:flex justify-between items-center rounded-4xl bg-[#E7FAFE] relative">
        <div className=" w-full h-full p-10 flex flex-col gap-6">
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
          className="rounded-r-4xl object-cover"
        />
      </div>

      <div className=" mt-20 space-y-20">
        <div className="flex justify-between">
          <h1 className="text-4xl font-semibold">Categories</h1>
          <button className="bg-[#E7FAFE] rounded-xl text-xl px-5 py-3 font-semibold hover:shadow-lg hover:cursor-pointer">
            View All Categories
          </button>
        </div>
        <div className="grid lg:grid-cols-6 sm:grid-cols-3  md:grid-cols-4 gap-6 grid-cols-2 ">
          {category.map((item, index) => (
            <div
              className={`${item.bg} shadow-lg h-50.5 w-45 flex flex-col justify-center items-center gap-5 rounded-xl `}
            >
              <img src={item.img} alt="img" className="object-cover" />
              <h1 className="font-semibold">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full text-center py-20 space-y-4">
        <h1 className="text-5xl font-semibold">Simple and tasty recipes</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          nostrum quae deserunt minima numquam et dolorem <br /> nisi repellat
          fugiat architecto ipsum, aspernatur ad totam praesentium nihil, minus
          saepe ullam neque.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((item, index) => (
          <div
            key={index}
            className="w-full bg-gradient-to-t from-[#E7FAFE] to-transparent rounded-2xl p-4 flex flex-col gap-4"
          >
            <img src={item.img} alt="food" className="rounded-2xl w-full" />
            <h1 className="text-3xl">{item.name}</h1>
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
      </div>

      <div className="w-full h-150 md:flex  items-center pt-40">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-semibold">
            Everyone can be a chef <br /> in their own kitchen
          </h1>
          <p className="text-gray-500 text-lg font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            debitis perspiciatis consequatur blanditiis obcaecati.
          </p>
          <button className="border text-lg px-7 py-3 w-fit bg-black text-white font-semibold rounded-lg hover:shadow-lg hover:cursor-pointer">
            Learn More
          </button>
        </div>
        <img src="/images/chef-01.png" alt="chef" />
      </div>
    </div>
  );
};

export default Home;
