import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: cart = [],  } = useQuery({
    queryKey: ["cart" , user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      // console.log(res.data)
      return res.data;
    },
  });
  return [cart, refetch];
};
// const useCart = () => {
//     const axiosSecure = useAxiosSecure();
//     const { user } = useAuth();
//     const { refetch, data: cart = [],  } = useQuery({
//       queryKey: ["cart" ],
//       queryFn: async () => {
//         const res = await axiosSecure.get(`/carts`);
//         return res.data;
//       },
//     });
//     return [cart, refetch];
//   };

export default useCart;
