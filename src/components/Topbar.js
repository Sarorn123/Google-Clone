import React from 'react';
import { BiMicrophone, BiNews } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineSetting, } from "react-icons/ai";
import { MdClear, MdOutlineVideoLibrary } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {TbGridDots} from "react-icons/tb";
import { useRequest } from '../Context/RequestContex';

const Topbar = () => {
    const googleIcon = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
    const user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";


    const location = useLocation();
    const pathname = location.pathname;

    const { requestToApi, keyword, setKeyword} = useRequest();

    const handleHitEnterSearch = (e) => {
        if(e.code === "Enter") requestToApi(pathname);
    }

    const handleClearKeyword = () => {
        setKeyword("");
    }

    return (
        <div className='h-[15vh] lg:h-[20vh] shadow-sm w-full'>

            <div className='flex justify-between w-[95%] mx-auto my-2 lg:my-5'>
                <div className='flex items-center'>
                    <Link to={"/search"}>
                        <img src={googleIcon} className="h-4 lg:h-7" />
                    </Link>

                    <div className='flex items-center rounded-3xl shadow-lg border border-gray-200 px-5 ml-4 lg:ml-10 py-2 lg:py-3 lg:w-[50rem] justify-between hover:shadow-inner'>
                        <input placeholder='Search Something...' className='outline-none w-full' value={keyword} onChange={e => setKeyword(e.target.value)} onKeyDown={e => handleHitEnterSearch(e)} autoFocus />
                        <div className='flex items-center'>
                            {
                                keyword && <MdClear className='text-md lg:text-2xl text-gray-500 lg:mx-4 cursor-pointer  hidden lg:block' onClick={handleClearKeyword} />
                            }
                            
                            <BiMicrophone className='text-md lg:text-2xl cursor-pointer text-blue-500 lg:mx-2' />
                            <AiOutlineSearch className='text-md lg:text-2xl cursor-pointer text-blue-500' onClick={() => requestToApi(pathname)} />
                        </div>
                    </div>
                </div>

                <div className='flex items-center'>
                    <AiOutlineSetting className='text-3xl text-gray-500 mx-1 lg:mx-4 p-1 rounded-full cursor-pointer hover:bg-gray-300' />
                    <TbGridDots className='text-3xl text-gray-500 mx-1 lg:mx-4  p-1 rounded-full cursor-pointer hover:bg-gray-300' />
                    <img src={user} alt='user' className='w-4 h-4 lg:w-8 lg:h-8 rounded-full mx-1 lg:mx-4 cursor-pointer' />
                </div>

            </div>

            <div className='w-[90%] lg:w-[70%] mx-auto pt-4 flex items-center'>

                <Link to={"/search"}>
                    <div className='flex items-center cursor-pointer mr-2 '>
                        <AiOutlineSearch className={pathname === "/search" ? 'text-md  mx-1 lg:mx-2 text-blue-500' : 'text-md  mx-1 lg:mx-2 text-gray-500'} />
                        <h1 className={pathname === "/search" ? 'text-sm text-blue-500' : 'text-sm text-gray-500'}>All</h1>
                    </div>
                </Link>
               

                <Link to={"/image"}>
                    <div className='flex items-center cursor-pointer mx-2'>
                        <BsImage className={pathname === "/image" ? 'text-md  mx-1 lg:mx-2 text-blue-500' : 'text-md  mx-1 lg:mx-2 text-gray-500'}  />
                        <h1 className={pathname === "/image" ? 'text-sm text-blue-500' : 'text-sm text-gray-500'}>Images</h1>
                    </div>
                </Link>

                <Link to={"/video"}>
                    <div className='flex items-center cursor-pointer mx-2'>
                        <MdOutlineVideoLibrary className={pathname === "/video" ? 'text-md  mx-1 lg:mx-2 text-blue-500' : 'text-md  mx-1 lg:mx-2 text-gray-500'} />
                        <h1 className={pathname === "/video" ? 'text-sm text-blue-500' : 'text-sm text-gray-500'}>Videos</h1>
                    </div>
                </Link>

                <Link to={"/news"}>
                    <div className='flex items-center cursor-pointer mx-2'>
                        <BiNews className={pathname === "/news" ? 'text-md  mx-1 lg:mx-2 text-blue-500' : 'text-md  mx-1 lg:mx-2 text-gray-500'} />
                        <h1 className={pathname === "/news" ? 'text-sm text-blue-500' : 'text-sm text-gray-500'}>News</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Topbar;