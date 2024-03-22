import React from 'react'

const Searchinput = () => {
  return (
    <form className='items-center'>
      <label className="input  bg-white border-2 border-gray-400 flex items-center gap-2">
        <input type="text" className="grow" placeholder="Поиск" />
        <button type='submit' className='btn btn-circle bg-inherit min-h-0 h-10 border-none text-gray-600 hover:bg-[#2FAA1B]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </button>      
      </label>
    </form>
  )
}

export default Searchinput


// import React from 'react'

// const Searchinput = () => {
//   return (
//     <form className='items-center'>
//       <label className="input  bg-white border-2 border-gray-400 flex items-center gap-2">
//         <input type="text" className="grow" placeholder="Поиск" />
//         <button type='submit' className='btn bg-inherit min-h-0 h-10  border-transparent text-gray-600'>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
//       </button>      
//       </label>
//     </form>
//   )
// }

// export default Searchinput