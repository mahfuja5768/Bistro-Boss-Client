import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import img from "../../../assets/menu/banner3.jpg";
import imgP from "../../../assets/menu/pizza-bg.jpg";
import imgSu from "../../../assets/menu/soup-bg.jpg";
import imgSa from "../../../assets/menu/salad-bg.jpg";
import imgD from "../../../assets/menu/dessert-bg.jpeg";
import PopularMenu from "../../home/PopularMenu/PopularMenu";
import { Parallax, Background } from "react-parallax";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessertItems = menu.filter((menu) => menu.category === "dessert");
  const soupItems = menu.filter((menu) => menu.category === "soup");
  const saladsItems = menu.filter((menu) => menu.category === "salad");
  const pizzaItems = menu.filter((menu) => menu.category === "pizza");
  const offeredItems = menu.filter((menu) => menu.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={img}
        title={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectionTitle>

      {/* DESSERTS */}
      <MenuCategory
        items={dessertItems}
        img={imgD}
        title="dessert"
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* PIZZA */}
      <MenuCategory
        items={pizzaItems}
        img={imgP}
        title="pizza"
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* SALADS */}

      <MenuCategory
        items={saladsItems}
        img={imgSa}
        title="salad"
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* SOUPS */}
      <MenuCategory
        items={soupItems}
        img={imgSu}
        title="soup"
        subTitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
