import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const url = "https://bistro-boss-server-swart-sigma.vercel.app/menu";
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       const data = res.data;
  //       setMenu(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, [url]);

  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: menu = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/menu");
      // console.log(res.data)
      return res.data;
    },
  });
  return [menu, refetch, loading];
};

export default useMenu;
