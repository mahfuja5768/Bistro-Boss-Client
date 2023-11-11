import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popularItems = menu.filter((menu) => menu.category === "popular");

  return (
    <section className="my-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popularItems?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline bottom-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
