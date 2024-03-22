import React from 'react'
import Conversation from './Conversation.jsx'

const Conversations = () => {
  return (
    // overflow-auto для скрола
    <div className='py-2 flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations

// import React from 'react'
// import { BiLogOut } from "react-icons/bi";

// const LogoutButton = () => {
//   return (
//     <div className=''>
//         <BiLogOut className='w-6 h-6 text-gray-500 cursor-pointer' />
//     </div>
//   )
// }

// export default LogoutButton