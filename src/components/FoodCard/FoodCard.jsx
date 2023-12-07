import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;

  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [ , refetch] = useCart();
  const { user } = useAuth();

  const handleToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} is added successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged in!",
        text: "Please login to add to the cart",
        showCancelButton: true,
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        navigate("/login", { state: { from: location } });
      });
    }
  };

  return (
    <div className="card relative">
      <figure className="">
        <img src={image} alt="Shoes" className="" />
      </figure>
      <p className=" absolute top-3 right-12 bg-slate-800 text-white px-3  py-1 rounded-full">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleToCart}
            className="btn bg-transparent border-0  border-b-4 border-[#BB8506]"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
