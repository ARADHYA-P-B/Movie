import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'


function Movies() {
        const [movies,setMovies]= useState([])
        const [pageNo,setPageNo] =useState(1)

       
  return (
    <div>
        <div className='text-2xl font-bold text-center'> 
          Trending Movies 
        </div>
       <div className='flex flex-row flex-wrap justify-around gap-8'>

           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
           <MovieCard/>
        </div>
      <Pagination/>       
    </div>
  )
}

export default Movies

//https://omdbapi.com/?s=star+war&apikey=fd505311&page=2