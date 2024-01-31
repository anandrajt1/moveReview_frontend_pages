import axios from 'axios';

const url=import.meta.env.VITE_API_BASE_URL
async function getMovieBySlug(slug){
    try {
        const res=await axios.get(`${url}/movies/${slug}`)
        console.log(res);
        const movie=res.data
        return movie

    } catch (error) {
        console.log(error)
    }
   
}

export default getMovieBySlug