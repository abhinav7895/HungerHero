import MenuCard from "./MenuCard";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const RestaurantItems = (props) => {
  const { vegOption, resData, index, activeIndex, handleLabelClick } = props;
  const { title, itemCards } = resData;

  const filteredVegItems = itemCards?.filter((dish) => {
    if (vegOption == true) {
      return dish?.card?.info?.itemAttribute.vegClassifier === "VEG";
    } else {
      return dish;
    }
  });

  if (filteredVegItems.length === 0) {
    return;
  }

  return (
    <li className="border rounded-md p-2">
      <label
        htmlFor={title}
        onClick={() => {handleLabelClick(index)}}
        className="flex justify-between items-center text-lg font-semibold text-gray-800"
      >
        {title}
        <span>
            {activeIndex === index ? <SlArrowUp /> :
        <SlArrowDown />}
        </span>
      </label>
      <div className="content flex flex-col gap-3">
        {activeIndex === index &&
          filteredVegItems?.map((dish) => {
            return <MenuCard key={dish?.card?.info?.id} dishData={dish} />;
          })}
      </div>
    </li>
  );
};

export default RestaurantItems;
