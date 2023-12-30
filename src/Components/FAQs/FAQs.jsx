import React, { useState } from "react";
import { swiggyFaqs } from "../../constants";
import FAQItem from "./FAQItem";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center flex-col space-y-5 w-full container mx-auto place-items-center mt-[130px]">
      <div className="select-none text-3xl font-bold text-black p-2 rounded-md md:text-4xl">FAQs <span className='font-berkshire text-[#d74112]'>Hunger Hero</span></div>
      {swiggyFaqs.map((faq, index) => (
       <FAQItem index={index} question={faq.question} answer={faq.answer} activeIndex={activeIndex} handleClick={handleClick}/>
      ))}
    </div>

  );
};

export default FAQs;
