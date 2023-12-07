import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa6";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      console.log(res.data)
      return res.data;
    },
  });

  return <div>
     <h2 className="text-3xl">Total payments: {payments?.length}</h2>
    <div className="overflow-x-auto my-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-[#D1A054] text-black">
              <th>No</th>
              <th>Transaction Id</th>
              <th>Email</th>
              <th>Price</th>
              <th>Payment Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((item, index) => (
              <tr key={item._id} className="text-xl">
                <th>{index + 1}</th>
                <th>
                <h4 className=""> {item.transactionId}</h4>
                </th>
                <td>
                  {/* <div className="font-bold text-xl"> {item.email}</div> */}
                </td>
                <td>
                  <h4 className=""> ${item.price}</h4>
                </td>
                <th>
                  <h4 className=""> {item.data}</h4>
                
                </th>
                <th>
                  <h4 className=""> {item.status}</h4>
                
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>;
};

export default PaymentHistory;
