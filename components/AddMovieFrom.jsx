import axios from 'axios';
import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

function AddMovieFrom() {
  const formRef=useRef()

  function createUniqueSlug(slug){
    return slug+'-'+ uuidv4();
  }

  function handleMovieAdd(e){
    e.preventDefault()
    const form=formRef.current
    const title=form['title'].value
    const description=form['description'].value
    const image=form['image'].value
    const bannerImage=form['bannerImage'].value
    const slug=form['slug'].value
    
    const uniqueSlug=createUniqueSlug(slug)

    const movie={
      title:title,
      description:description,
      image:image,
      bannerImage:bannerImage,
      slug:uniqueSlug
    }

    const url=import.meta.env.VITE_API_BASE_URL
    axios.post(`${url}/movies/movie`,movie)
    .then((res)=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })

  }
  return (
    <>
    <h2 className=' text-2xl md:text-3xl font-heading mt-8 '>Add a new movie!</h2>

<section className='px-4 mt-4 '>

<form ref={formRef} onSubmit={handleMovieAdd} className='flex flex-col gap-4  rounded-lg shadow-lg  py-2 px-6 ' action="">

<div className='flex flex-col'>
<label className='font-heading'  htmlFor="title">Title:</label>
<input id='title' placeholder='Movie name...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' type="text" />
</div>

<div className='flex flex-col'>
<label className='font-heading'  htmlFor="image">Image:</label>
<input id='image' placeholder='Poster image url...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' type="text" />
</div>

<div className='flex flex-col'>
<label className='font-heading'  htmlFor="image">Banner Image:</label>
<input id='bannerImage' placeholder='Banner image url...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' type="text" />
</div>

<div className='flex flex-col'>
<label className='font-heading'  htmlFor="slug">Slug:</label>
<input id='slug' placeholder='Enter keywords...' className='py-2 px-4 border border-slate-300 rounded-lg outline-none' type="text" />
</div>

<div className='flex flex-col'>
<label className='font-heading' htmlFor="description">Description:</label>
<textarea id='description' placeholder="What's the movie about ..." className='py-2 px-4 border border-slate-300 rounded-lg outline-none' name="description" id="" cols="30" rows="7"></textarea>
</div>

<button type='submit' className='py-2 px-4 bg-orange-500 hover:bg-orange-400 rounded-lg md:text-xl'>Add Movie</button>
</form>
</section></>
  )
}

export default AddMovieFrom