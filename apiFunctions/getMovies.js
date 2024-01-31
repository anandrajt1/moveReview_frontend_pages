import axios from 'axios';

const url=import.meta.env.VITE_API_BASE_URL

async function getAllMovies(){
    try {
        const res=await axios.get(`${url}/movies`)
        const movies=res.data
        return movies
        
    } catch (error) {
        console.log(error)
    }

}

export default getAllMovies