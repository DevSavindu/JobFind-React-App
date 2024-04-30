// eslint-disable-next-line no-unused-vars
import React from 'react';
import sample from '../../assets/circle-logo-png-7.png';
import sample1 from '../../assets/61606-logo-circle-brand-ibm-download-hd-png.png';
import sample2 from '../../assets/25-255288_logo-circle.png';

// Define constant data for the cards
const cardData = [
  {
    id: 1,
    title: 'Simplicity',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.',
    image: sample, // Import image data here
  },
  {
    id: 2,
    title: 'Efficiency',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.',
    image: sample1, // Import image data here
  },
  {
    id: 3,
    title: 'Innovation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.',
    image: sample2, // Import image data here
  },
  // Add more objects here if needed
];

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block '>The value that holds us true and to account </h1>
      
      <div className='grid gap-[10rem] grid-cols-3 items-center '>
        {cardData.map((card) => (
          <div key={card.id} className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
            <div className='flex items-center gap-3'>
              <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                <img src={card.image} alt="" className='w-[90%]'/> {/* Use image data from card */}
              </div>
              <span className='font-semibold text-textColor text-[18px]'>{card.title}</span>
            </div>
            <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <div className='card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]'>
          <div>
            <h1 className='text-blueColor text-[30px]'></h1>
          </div>
      </div>
    </div>
  );
};

export default Value;
