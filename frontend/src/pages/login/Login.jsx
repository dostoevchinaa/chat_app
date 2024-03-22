import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg w-[37.8rem]'>
                <h2 className="font-sans mt-3 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
                    Chat Desktop
                </h2>
                <p className='text-center font-sans mt-3 font-thin text-gray-600 text-xl'>
                    Добро пожаловать в ПК версию учебного мессенджера! Войдите в аккаунт, чтобы продолжить
                </p>
                <form>
                    <div>
                        <div className='mt-12'>
                            <label className="input flex items-center gap-2 bg-inherit border-gray-400 input-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" placeholder="Введите номер телефона или почту" />
                            </label>
                        </div>
                        <div className='mt-5'>
                            <label className="input flex items-center gap-2 bg-inherit border-gray-400 input-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" value="Введите пароль" />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="btn border-inherit btn-block mt-5 bg-[#53A046] text-white font-sans text-xl font-[400] leading-2">Войти в аккаунт</button>
                    </div>
                    <a href="#" className="flex flex-col items-center justify-center mt-3 font-sans text-xl font-[400] leading-2 text-gray-600">
                        Зарегестрироваться
                    </a>
                </form>
            </div>
        </div>
    )
}

export default Login

//STARTER CODE FOR THIS FILE
// import React from 'react'

// const Login = () => {
//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className=' p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg w-[37.8rem]'>
//                 <h2 className="font-sans mt-3 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
//                     Chat Desktop
//                 </h2>
//                 <p className='text-center font-sans mt-3 font-thin text-gray-600 text-xl'>
//                     Добро пожаловать в ПК версию учебного мессенджера! Войдите в аккаунт, чтобы продолжить
//                 </p>
//                 <form>
//                     <div>
//                         <div className='mt-12'>
//                             <label className="input flex items-center gap-2 bg-inherit border-gray-400 input-ghost">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70 "><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
//                                 <input type="text" className="grow" placeholder="Введите номер телефона или почту" />
//                             </label>
//                         </div>
//                         <div className='mt-5'>
//                             <label className="input flex items-center gap-2 bg-inherit border-gray-400 input-ghost">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//                                 <input type="password" className="grow" value="Введите пароль" />
//                             </label>
//                         </div>
//                     </div>
//                     <div>
//                         <button className="btn border-inherit btn-block mt-5 bg-[#53A046] text-white font-sans text-xl font-[400] leading-2">Войти в аккаунт</button>
//                     </div>
//                     <a href="#" className="flex flex-col items-center justify-center mt-3 font-sans text-xl font-[400] leading-2 text-gray-600">
//                         Зарегестрироваться
//                     </a>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login