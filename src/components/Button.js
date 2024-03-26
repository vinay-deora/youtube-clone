import React from 'react'

const Button = ({channelName}) => {
  return (
    
    
      <div className=''>
{/* <button className='px-5 m-2 py-1 h-10 bg-gray-200 rounded-lg text-sm whitespace-nowrap'> */}
<button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded whitespace-nowrap">
   {channelName}

</button>
</div>
   
    
  )
}

export default Button
