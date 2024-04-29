import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import logo1 from '../../assets/one-1-logo-png-transparent.png';
import logo2 from '../../assets/puma-logo-1.png'
import logo3 from '../../assets/logo-F1.png'
// Import other logos if needed

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Web Development',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis provident molestias enim? Alias dolores exercitationem vel. Quasi ut tempora excepturi illo architecto corporis ullam ratione praesentium, animi fugit hic',
    company: 'Novac Linus Co.'
  },
  {
    id: 2,
    image: logo2, // Replace logo2 with the actual import for the second image
    title: 'Software Engineering',
    time: 'Soon',
    location: 'United States',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore et, necessitatibus similique nemo odio debitis minus sit! Quisquam vel ipsum consequuntur laborum unde. Porro rerum quidem explicabo quaerat non!',
    company: 'TechSolutions Inc.'
  },
  {
    id: 3,
    image: logo3, // Replace logo3 with the actual import for the third image
    title: 'Data Science',
    time: 'Later',
    location: 'United Kingdom',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae fugit saepe maxime itaque. Veritatis distinctio dolore maiores doloremque a doloribus quae, ipsa atque nulla iste, temporibus laborum sed quam!',
    company: 'DataTech Solutions'
  }
];

const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>
        
        {Data.map(({ id, image, title, time, location, desc, company }) => (
          <div key={id} className='group group/item singleJob w-[270px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-4000/700 hover:shadow-lg'>
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive/>{time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
              {desc}
            </p>
            <div className="company flex items-center gap-2">
              <img src={image} alt="" className='w-[15%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
            </div>
            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Jobs;
