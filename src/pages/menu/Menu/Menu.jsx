import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../home/PopularMenu/PopularMenu";
import { Parallax, Background } from "react-parallax";

const Menu = () => {
  
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      <Cover
        img={img}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

         </div>
  );
};

export default Menu;
