import React, { useRef } from 'react'
import axios from 'axios';
import useReviews from '../hooks/useReviews';

function AddReviewForm() {
  const formRef=useRef()
  const { addReview } = useReviews();

  function handleReviewAdd(e){
    e.preventDefault()
    const form=formRef.current
    const title=form['title'].value
    const description=form['description'].value
    

    const review={
      title:title,
      description:description
      
    }

    const url=import.meta.env.VITE_API_BASE_URL
    axios.post(`${url}/reviews/review`,review)
    .then((res)=>{
      console.log(res)
      addReview(review);
    })
    .catch(err=>{
      console.log(err)
    })

  }
  return (
    <section className='px-4 '>
      <h3 className='text-3xl font-heading mb-4'>Add another review</h3>
    <form ref={formRef} onSubmit={handleReviewAdd} className='flex flex-col gap-4  rounded-lg shadow-lg  py-2 px-6 ' action="">
      <div className='flex flex-col'>
      <label className='font-heading'  htmlFor="title">Title:</label>
      <input id="title" placeholder='Give a short title for your review...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' type="text" />
      </div>
      <div className='flex flex-col'>
      <label className='font-heading' htmlFor="description">Description:</label>
      <textarea id="description" placeholder='Enter your detailed review here...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' name="description" id="" cols="30" rows="7"></textarea>
      </div>
      <button type='submit' className='py-2 px-4 bg-orange-500 hover:bg-orange-400 rounded-lg md:text-xl'>Submit</button>
    </form>
    </section>
  )
}

export default AddReviewForm