// eslint-disable-next-line no-unused-vars
import React from 'react'
import {AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn}from 'react-icons/ci'
 
const Search = () => {
  return (
    <div className='search  grid gap-20 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon cursor-pointer'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'/>
          </div>
          <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text-[25px] icon cursor-pointer'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Company...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'/>
          </div>
          <div className='flex gap-2 items-center'>
            <CiLocationOn className='text-[25px] icon cursor-pointer'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Search by Location...' />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon cursor-pointer'/>
          </div>
          <button className='bg-blueColor h-full p-3 px-10 rounded-xl text-white cursor-pointer'>Search</button>
        </div>  
      </form> 
      
    </div>
  )
}

export default Search

