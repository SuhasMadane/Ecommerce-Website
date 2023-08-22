import React from "react";
import MainCarousel from "../../Components/MainCarousel/MainCarousel";
import SubCarousel from "../../Components/SubCarousel/SubCarousel";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/NavBar/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainCarousel />
      {/* Instead of writing this div for SubCarousel multiple times iterate it over multiple categories*/}
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {/* after buildibg backend pass all your product data as a props to these carousels along with there category*/}
        <SubCarousel />
        <SubCarousel />
        <SubCarousel />
        <SubCarousel />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
