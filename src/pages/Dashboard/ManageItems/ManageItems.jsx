import { FaTrash } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  //   console.log(axiosSecure);
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(id);
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
      <SectionTitle
        heading="MANAGE ALL ITEMS"
        subHeading="---Hurry Up!---"
      ></SectionTitle>
      <div>
        <div className="">
          <h2 className="text-3xl">Items: {menu.length}</h2>
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
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu?.map((item, index) => (
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
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className=" text-red-500">
                        <FaEdit className=""></FaEdit>
                      </button>
                    </Link>
                  </th>
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
    </div>
  );
};

export default ManageItems;
