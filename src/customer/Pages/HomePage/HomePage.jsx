import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import SubCarousel from "../../Components/HomeSectionCarousal/HomeSectionCarousal";
import Footer from "../../Components/Footer/Footer";
import Navigation from "../../Components/Navigation/Navigation";
import HomeSectionCarousel from "../../Components/HomeSectionCarousal/HomeSectionCarousal";
import { mens_kurta } from "../../Data/men/mens_kurta";
import { mensShoesPage1 } from "../../Data/shoes/shoes";
import { shirt } from "../../Data/men/men_shirt";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <MainCarousel />
      {/* Instead of writing this div for SubCarousel multiple times iterate it over multiple categories*/}
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        {/* after buildibg backend pass all your product data as a props to these carousels along with there category*/}
        {/* <SubCarousel />
         */}
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel
          data={mensShoesPage1}
          sectionName={"Men's Shoes"}
        />
        <HomeSectionCarousel data={shirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
