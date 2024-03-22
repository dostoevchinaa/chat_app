import React from 'react'
import Searchinput from './Searchinput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div className='border-r-2 border-gray-300 p-4 flex flex-col'>
      <div className='flex items-center gap-x-14'>
        <h2 className="font-sans pl-16 mt-3 mb-3 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
          Сообщения
        </h2>
        <LogoutButton />
      </div>
      <Searchinput />
      {/* <div className='divider px-3'></div> */}
      <Conversations />

    </div>
  )
}

export default Sidebar


// import React from 'react'
// import Searchinput from './Searchinput.jsx'
// import Conversations from './Conversations.jsx'
// import LogoutButton from './LogoutButton.jsx'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
//       <div className='flex items-center gap-x-14'>
//         <h2 className="font-sans pl-16 mt-3 mb-3 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
//           Сообщения
//         </h2>
//         <LogoutButton />
//       </div>
//       <Searchinput />
//       {/* <div className='divider px-3'></div> */}
//       <Conversations />

//     </div>
//   )
// }

// export default Sidebar