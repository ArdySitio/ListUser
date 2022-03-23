import { useState, useEffect } from "react";
import axios from "axios";

const useListUser = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=10")
      .then((res) => {
        // console.log(res.data.results);
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data;
};

export default useListUser;
