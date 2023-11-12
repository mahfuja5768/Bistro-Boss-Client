import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ img, items, title, subTitle}) => {
  return (
    <div>
      {title && (
        <Cover
          img={img}
          title={title}
          subTitle={subTitle}
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-12">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline my-6  border-0 border-b-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
