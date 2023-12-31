import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../../hooks/useCart";
import useAdmin from "../../../../hooks/useAdmin";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart()
  const [isAdmin]=useAdmin()
  // console.log(cart)

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully log out!",
          icon: "success",
          confirmButtonText: "Done",
        });
      })
      .catch((err) => console.log(err));
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className=" lg:mx-7">
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      {
        user && isAdmin &&  <li>
        <Link to="/dashboard/adminHome">Dashboard</Link>
      </li>
      }
      {
        user && !isAdmin &&  <li>
        <Link to="/dashboard/userHome">Dashboard</Link>
      </li>
      }
      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-outline rounded-full">
           <FaCartShopping className="text-white"></FaCartShopping>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 h-[90px] bg-black bg-opacity-60 max-w-screen-xl mx-auto text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm items-start dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro-Boss-Client
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex flex-row-reverse items-center justify-between gap-3">
            <Link to="/login">
              <button onClick={handleLogout} className="btn btn-info">
                Logout
              </button>
            </Link>
            
            <p className="text-2xl font-bold">
              {user?.displayName ? user?.displayName : user?.email}
            </p>
            {
              user.photoURL ? <img src={user.photoURL} className="w-16 h-16 rounded-full" alt="" /> : ""
            }
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-info">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
