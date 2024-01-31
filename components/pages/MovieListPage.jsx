import React from 'react'
import AddMovieFrom from '../AddMovieFrom'
import getAllMovies from '../../apiFunctions/getMovies';
import { Link, useLoaderData } from 'react-router-dom';


export async function loader() {
    const movies = await getAllMovies();
    return { movies };
  }

function MovieListPage() {

    const {movies}=useLoaderData()
  return (
    <>
    <div className='max-w-screen-lg mx-auto p-6 mt-10'>

        {/* LATEST MOVIE LIST    */}
        <h2 className=' text-2xl md:text-3xl font-heading '>Latest Movies...</h2>
        <section className='grid grid-cols-1 px-6   md:grid-cols-2 lg:grid-cols-3'>
        {
            movies.map((movie)=>{
                return(
                    <Link to={`/movies/${movie.slug}`}>
                    <article key={movie.slug} className='p-2 mt-6 border border-slate-300 hover:scale-105 duration-300 rounded-lg shadow-lg w-60 md:w-64 cursor-pointer'>
                <img className='w-full rounded-t-lg aspect-square' src={movie.image} alt="" />
                <h3 className='text-lg font-semibold'>{movie.title}</h3>
                <p className='text-gray-600 '>(3) comments </p>
            </article>
                    </Link>

                )
            })
        }
         </section>

        {/* ADD NEW MOVIE FORM */}

        <AddMovieFrom/>

    </div>
    </>
  )
}

export default MovieListPage