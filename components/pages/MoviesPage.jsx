import React from 'react'
import UserReview from '../UserReview'
import AddReviewForm from '../AddReviewForm'
import getMovieBySlug from '../../apiFunctions/getMovieBySlug'
import { useLoaderData } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';



export async function loader({params}) {
  try {
    const movie = await getMovieBySlug(params.slug);
    console.log(movie);
    return { movie };
  } catch (error) {
    console.error('Error fetching movie:', error);
    return { movie: null }; // Handle the error appropriately
  }
}


function MoviesPage(props) {
  const {movie}=useLoaderData()
  const {reviews,error}=useReviews()
  if (!movie) {
    return <div>Loading...</div>; //Add a loading state or handle appropriately
  }

  
  
  
  return (
    <>
    <div className='container mx-auto mt-12 lg:grid grid-cols-2 gap-6  '>

<div>
  {/* MOVIE */}
  
      <section key={movie.slug} className='px-4'>
     <img className='rounded-lg shadow-xl' src={movie.bannerImage} alt="banner_image" />
    <h3 className='text-3xl my-2'>{movie.title} </h3>
    <p className='text-gray-600'>{movie.description} </p>
    </section>
   
  
{/* REVIEW SECTION */}
    <UserReview/>
</div>

  <div>
      {/* REVIEW FORM */}
   <AddReviewForm/>

  </div>
    </div>
     

    
    </>
  )
}

export default MoviesPage