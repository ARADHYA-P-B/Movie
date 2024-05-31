import React from 'react'

function WatchList() {
  
  return (
    <>  
    <div className='flex justify-center flex-wrap m-4'>
       <div className='flex justify-center items-center bg-blue-600 h-[3rem] w-[6rem] text-center rounded-xl font-bold text-white mx-4'>Action</div>
       <div className='flex justify-center items-center bg-blue-600 h-[3rem] w-[6rem] text-center rounded-xl font-bold text-white '>Drama</div>
    </div>

    <div className='flex justify-center my-4'>
      <input type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 text-center rounded-xl'/>
        
    </div>
    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
        <table className='w-full text-black-500 text-center ' >
           <thead className='border-b-2'>
            <tr>
              <th> Name </th>
              <th> Rating </th>
              <th> popularity </th>
              <th>Genre</th>
            </tr>
           </thead>
           <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-4 py-4'>
                <img  className='h-[6rem] w-[10rem] rounded-xl 'src={'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg'}/>
               <div className='mx-10'> The Movie</div>
              </td>
                <td>8.5</td>
                <td>9</td>
                <td>Action</td>
                <td className='text-red-800'>Delete</td>
              
            </tr>
           </tbody>
           <tbody>
            <tr className='border-b-2'>
              <td className='flex items-center px-4 py-4'>
                <img  className='h-[6rem] w-[10rem] rounded-xl 'src={'https://img.buzzfeed.com/buzzfeed-static/static/2023-07/18/21/asset/71268e2b66ba/sub-buzz-645-1689715488-7.jpg'}/>
               <div className='mx-10'> The Movie</div>
              </td>
                <td>8.5</td>
                <td>9</td>
                <td>Action</td>
                <td className='text-red-800'>Delete</td>
              
            </tr>
           </tbody>
        </table>
    </div>
    </>
  )
}

export default WatchList 