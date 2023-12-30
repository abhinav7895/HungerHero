import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const FAQItem = ({index, question, answer, activeIndex, handleClick}) => {
  return (
    <div
      key={index}
      className="border rounded-md shadow-sm border-blue-200  max- mx-auto hover:border-orange-400 overflow-hidden w-full max-w-4xl"
    >
      <button
        className="flex justify-between items-center p-4 text-left font-medium focus:outline-none w-full"
        onClick={() => handleClick(index)}
      >
        <h3 className="text-gray-600 ">{question}</h3>
        {activeIndex === index ? (
          <IoIosArrowDropdown fontSize={"1.5rem"} />
        ) : (
          <IoIosArrowDropup fontSize={"1.5rem"} />
        )}
      </button>
      {activeIndex === index && (
        <div className="p-4 text-gray-700 bg-blue-50 border-t border-blue-200 ">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
