import React from "react";
import Navbar from "../components/Navbar";
import Announcemant from "../components/Announcemant";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Announcemant />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
