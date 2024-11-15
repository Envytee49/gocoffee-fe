import React, { ReactNode } from 'react';

interface FilterCardProps {
  filter?: string;
  value?: string;
  icon?: ReactNode;// className is an optional prop of type string
}

const FilterCard: React.FC<FilterCardProps> = ({ filter, value, icon }) => {
  return (
    <div className="flex flex-row items-center bg-white p-4 rounded-lg shadow-md w-60 text-gray-700 h-16 ">
      <div className='mr-3'>{icon}</div>
      <div className='flex flex-col w-full'>
        <div className='flex flex-row'>
          <span className='text-gray-text text-sm mr-auto'>{filter}</span>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#868e96"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
          </div>
        </div>
        <span className='font-bold'>{value}</span>
      </div>
    </div>
  );
}

export default FilterCard;
