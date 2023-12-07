import {
  FaBagShopping,
  FaBars,
  FaBookOpen,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaList,
  FaSpoon,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAd, FaHome } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  //TODO: get isAdmin value from database
  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  // const isAdmin = false;
  return (
    <div className="grid grid-cols-6 gap-5 ">
      <div className=" col-span-1 min-h-screen bg-[#D1A054] p-6">
        <ul className="flex flex-col justify-center text-lg space-y-6 text-black">
          {isAdmin ? (
            <>
             <li className="flex items-center gap-2">
            <span>
              <FaHome className=""></FaHome>
            </span>
            <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaSpoon className=""></FaSpoon>
            </span>
            <NavLink to="/dashboard/addItems">
            Add Items
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaList className=""></FaList>
            </span>
            <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaBookOpen className=""></FaBookOpen>
            </span>
            <NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaUsers className=""></FaUsers>
            </span>
            <NavLink to="/dashboard/allUsers">all Users</NavLink>
          </li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2">
                <span>
                  <FaHome className=""></FaHome>
                </span>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCartShopping className=""></FaCartShopping>
                </span>
                <NavLink to="/dashboard/cart">
                  My Cart <span>({cart.length})</span>
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaCalendar className=""></FaCalendar>
                </span>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaAd className=""></FaAd>
                </span>
                <NavLink to="/dashboard/review">Review</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <FaAd className=""></FaAd>
                </span>
                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
              </li>
              
            </>
          )}

          <div
            className="divider divider-secondary
"
          ></div>
          <li className="flex items-center gap-2">
            <span>
              <FaHome className=""></FaHome>
            </span>
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaBars className=""></FaBars>
            </span>
            <Link to="/menu">Menu</Link>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaBagShopping className=""></FaBagShopping>
            </span>
            <Link to="/order/salad">Order</Link>
          </li>
          <li className="flex items-center gap-2">
            <span>
              <FaEnvelope className=""></FaEnvelope>
            </span>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-5 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
