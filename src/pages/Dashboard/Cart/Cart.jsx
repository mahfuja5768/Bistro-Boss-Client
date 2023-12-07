import { FaTrash } from "react-icons/fa6";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  //   console.log(cart);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              //   text: `${name} has been deleted.`,
              text: `Food has been deleted.`,
              icon: "success",
              showConfirmButton: false,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-3xl">Items: {cart.length}</h2>
        <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
      <Link to='/dashboard/payment'>  <button disabled={!cart.length} className="btn btn-primary">Pay</button></Link>
      </div>

      <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-black">
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={item._id} className="text-xl">
                <th>{index + 1}</th>
                <th>
                  <img
                    src={item.image}
                    className="w-32 rounded-2xl"
                    alt="Avatar Tailwind CSS Component"
                  />
                </th>
                <td>
                  <div className="font-bold text-xl"> {item.name}</div>
                </td>
                <td>
                  <h4 className=""> ${item.price}</h4>
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className=" text-red-500"
                  >
                    <FaTrash className=""></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
