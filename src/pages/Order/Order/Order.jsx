import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import imgC from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import Category from "./../../home/Category/Category";

const Order = () => {
  const { category } = useParams();
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(initialIndex);
  // setTabIndex(category)
  const [menu] = useMenu();
  const dessertItems = menu.filter((menu) => menu.category === "dessert");
  const soupItems = menu.filter((menu) => menu.category === "soup");
  const saladsItems = menu.filter((menu) => menu.category === "salad");
  const pizzaItems = menu.filter((menu) => menu.category === "pizza");
  const offeredItems = menu.filter((menu) => menu.category === "offered");

  return (
    <div className="mb-24 text-center">
      <Helmet>
        <title>Bistro-Boss | Order Food</title>
      </Helmet>
      <Cover
        img={imgC}
        title={"OUR SHOP"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          {categories.map((item) => (
            <Tab>{item}</Tab>
          ))}
        </TabList>
        <TabPanel>
          <OrderTab menuItems={saladsItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menuItems={pizzaItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menuItems={soupItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menuItems={dessertItems}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab menuItems={offeredItems}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
