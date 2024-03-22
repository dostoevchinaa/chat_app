import React from 'react'
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className='px-4 pb-3 bg-white'>
            <div className='w-full relative'>
                <label className='input  bg-gray-300  flex items-center'>
                    <input
                        type='text'
                        className='text-sm rounded-lg block w-full p-2.5 font-medium text-gray-800'
                        placeholder='Введите сообщение....'
                    />
                    <button type='submit' className='btn btn-circle bg-inherit min-h-0 h-10 border-none mt-1 absolute inset-y-0 end-0 flex items-center text-gray-600 hover:bg-[#2FAA1B]'>
                        <BsSend />
                    </button>
                </label>

            </div>
        </form>
    )
}

export default MessageInput


// import React from 'react'
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//     return (
//         <form className='px-4 pb-3 bg-white'>
//             <div className='w-full relative'>
//                 <label className='input  bg-gray-300  flex items-center'>
//                     <input
//                         type='text'
//                         className='text-sm rounded-lg block w-full p-2.5 font-medium text-gray-800'
//                         placeholder='Введите сообщение....'
//                     />
//                     <button type='submit' className='btn btn-circle bg-inherit min-h-0 h-10 border-none mt-1 absolute inset-y-0 end-0 flex items-center text-gray-600 hover:bg-[#2FAA1B]'>
//                         <BsSend />
//                     </button>
//                 </label>

//             </div>
//         </form>
//     )
// }

// export default MessageInput