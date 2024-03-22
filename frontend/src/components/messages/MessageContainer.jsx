import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? <NoChatSelected /> :
                (<>
                    {/* Header */}
                    <div className='flex items-center gap-2 border-b-2 border-gray-300'>
                        <div className='avatar online'>
                            <div className='w-12 rounded-full'>
                                <img
                                    src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                                    alt='user avatar'
                                />
                            </div>
                        </div>
                        <span className='font-medium text-gray-900'>Ваня Иванов</span>
                    </div>
                    <Messages />
                    <MessageInput />
                </>)}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2'>
                <p>Добро пожаловать 👋<br/> Имя</p>
                <p>Выберите чат, чтобы начать</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};

//
// import React from 'react'
// import Messages from './Messages.jsx'
// import MessageInput from './MessageInput.jsx'
// import { TiMessages } from 'react-icons/ti'

// const MessageContainer = () => {
//     const noChatSelected = true;
//     return (
//         <div className='md:min-w-[450px] flex flex-col'>
//             {noChatSelected ? <NoChatSelected /> :
//                 (<>
//                     {/* Header */}
//                     <div className='flex items-center gap-2 border-b-2 border-gray-300'>
//                         <div className='avatar online'>
//                             <div className='w-12 rounded-full'>
//                                 <img
//                                     src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
//                                     alt='user avatar'
//                                 />
//                             </div>
//                         </div>
//                         <span className='font-medium text-gray-900'>Ваня Иванов</span>
//                     </div>
//                     <Messages />
//                     <MessageInput />
//                 </>)}
//         </div>
//     )
// }

// export default MessageContainer

// const NoChatSelected = () => {
//     return (
//         <div className='flex items-center justify-center w-full h-full'>
//             <div className='px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2'>
//                 <p>Добро пожаловать 👋<br/> Имя</p>
//                 <p>Выберите чат, чтобы начать</p>
//                 <TiMessages className='text-3xl md:text-6xl text-center' />
//             </div>
//         </div>
//     );
// };

