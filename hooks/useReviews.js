import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useReviews() {
  const [reviews,setReviews]=useState(null)
  const[error,setError]=useState(null)
  useEffect(()=>{
    const url=import.meta.env.VITE_API_BASE_URL
    axios.get(`${url}/reviews`)
    .then(res=>{
        const reviewsFromBackend=res.data
        setReviews(reviewsFromBackend)
    })
    .catch(err=>{
        setError(err)
    })

  },[])

  const addReview = (newReview) => {
    // Update the reviews state with the new review
    setReviews((prevReviews) => [newReview, ...prevReviews]);
  };

  return { reviews, error, addReview }
}

export default useReviews