import React from 'react'
interface Review {
  name: string;
  rating: number;
  review: string;
}
const ReviewCard = ({name, rating, review}: Review) => {
  return (
    <div className='flex flex-col shadow-xl p-8 mb-4'>
      <div>{name}</div>
      <div>{rating}</div>
      <div>{review}</div>
    </div>
  )
}

export default ReviewCard