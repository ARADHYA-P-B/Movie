import React from 'react'

function MovieCard( {handleAddtoWatchList}) {
  return (
    <div className='h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover-cursor-pointer flex flex-col justify-between items-end' style={{backgroundImage :'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoVi9x2zEGZGRKJDABhUyiLDrNspWZ9R2Ao8endRlL2AXcwojL1j6pn3BfcHG6zkoy1I&usqp=CAU)'}}>
      
      <div>
          &#128512;
      </div>

     <div className='text-white text-l w-full p-2 text-center bg-gray-800/10'> same
         
     </div>
     

   </div>
    )
}

export default MovieCard