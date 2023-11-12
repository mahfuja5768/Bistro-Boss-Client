import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://localhost:5000/menu";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setMenu(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return [menu, loading];
};

export default useMenu;
