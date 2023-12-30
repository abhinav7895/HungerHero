import { useEffect, useState } from "react";
import { RESTAURANT_API_URL, RESTAURANT_API_URL_LAST } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURANT_API_URL + resId + RESTAURANT_API_URL_LAST
    );

    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
