import React from "react";
import { IMG_CDN } from "../../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => {
  return (
    <Link to={"restaurants/" + data.id}>
      <div className="w-[238px] h-[262px]">
        <img
          className="h-[190px] w-full object-cover rounded-2xl border-2"
          src={IMG_CDN + data.imgId}
          alt={`img-${data.name}`}
        />
        <h2 className="mt-2 truncate text-xl font-semibold	">{data.name}</h2>
        <p className="text-l flex items-center gap-1">
          <span className="text-xl text-green-500">&#9734;</span>
          {data.rating} 
        </p>
        {data.cuisines.length > 0 && (
          <h4 className="truncate text-gray-500">{data.cuisines.join(", ")}</h4>
        )}
        <h6 className="text-gray-500 truncate">{data.location}</h6>
      </div>
    </Link>
  );
};

export default RestaurantCard;
