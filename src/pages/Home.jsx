import React from "react";
import Navbar from "../components/Navbar";
import Announcemant from "../components/Announcemant";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcemant />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
