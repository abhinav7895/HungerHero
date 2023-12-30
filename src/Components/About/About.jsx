import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto p-8 mt-[90px]'>
      <h1 className='text-3xl font-bold mb-8 md:text-4xl'>
        About <span className='font-berkshire text-[#d74112]'>Hunger Hero</span>
      </h1>
      <section className='text-lg mb-6'>
        <p>
          Welcome to Hunger Hero, a modern and efficient food delivery platform inspired by Swiggy.
          Our mission is to connect users with their favorite restaurants and deliver delicious meals to their doorstep.
        </p>
        <p>
          With Hunger Hero, you can explore a wide range of cuisines, place orders with ease, and enjoy
          quick and reliable delivery services. Our user-friendly interface ensures a seamless experience from
          browsing restaurants to savoring your meal.
        </p>
        <p className='font-bold mt-4'>
          Key Features:
        </p>
        <ul className='list-disc list-inside mb-6'>
          <li>Extensive Restaurant Selection</li>
          <li>Real-time Order Tracking</li>
          <li>Secure and Convenient Payment Options</li>
          <li>Responsive Customer Support</li>
        </ul>
        <p>
          Whether you're craving your favorite local dish or exploring new culinary delights, Hunger Hero
          is here to make your dining experience enjoyable and hassle-free.
        </p>
        <p>
          Thank you for choosing Hunger Hero. We look forward to serving you delicious meals!
        </p>
      </section>
    </div>
  );
};

export default About;
