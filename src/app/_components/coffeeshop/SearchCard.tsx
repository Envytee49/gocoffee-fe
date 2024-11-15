import React from 'react';


const SearchCard = () => {
  return (
    <div className=" flex items-center bg-white px-4  rounded-lg shadow-md text-gray-700 h-16 w-96">
      <div className='mr-3'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="#BF7F55"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path></svg>
      </div>
      <input className='outline-none w-full' placeholder='cafe hanoi' />
    </div>
  );
}

export default SearchCard;
