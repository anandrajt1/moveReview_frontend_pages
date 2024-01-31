import React from 'react'
import dp1 from '../assets/dp/dp1.png'
import dp2 from '../assets/dp/dp2.png'
import dp3 from '../assets/dp/dp3.png'
import dp4 from '../assets/dp/dp4.png'
import dp5 from '../assets/dp/dp5.png'
import dp6 from '../assets/dp/dp6.png'
import dp7 from '../assets/dp/dp7.png'
import dp8 from '../assets/dp/dp8.png'
import dp9 from '../assets/dp/dp9.png'
import useReviews from '../hooks/useReviews'
import AddReviewForm from './AddReviewForm'

function UserReview() {

  const {reviews,error}=useReviews()

  function getRandomDp(){
    let dpNumber = Math.floor(Math.random() * 9) + 1; // Generate a random number between 1 and 9
    return eval(`dp${dpNumber}`); // Use eval to dynamically access the imported dp variable
}



  return (
    <section className='mt-10 px-4'>
    <h3 className='text-3xl font-heading mb-4'>User Reviews</h3>

    {reviews && reviews.length > 0 ?(
      reviews.map((review) => (
        <article key={review.id} className='flex flex-row border my-6 border-slate-300 shadow-md py-2 px-4 rounded-lg items-start gap-4'>
          <img className='w-20 h-20 md:w-24 md:h-24 rounded-full' src={getRandomDp()} alt="user dp" />
      <div>
        <h2 className='text-lg md:text-2xl'>{review.title} </h2>
        <p className='text-gray-700 text-sm md:text-base'>{review.description}</p>
      </div>
        </article>
      ))
    ) : (
      <p>No reviews available!</p>
    )}

    {error && <p>Error: {error.message}</p>}
   
    

    
    </section>
  )
}

export default UserReview