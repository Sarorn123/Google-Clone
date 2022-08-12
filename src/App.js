import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { RequestProvider } from './Context/RequestContex';

// Import Component
import Topbar from './components/Topbar';
import New from './components/News/New';
import Footer from './components/Footer';
import PageNotFound from './components/NotFound/PageNotFound';
import Search from './components/All/Search';
import Image from './components/Image/Image';
import Video from "./components/Video/Video";
import HomePage from './components/Home/HomePage';

const App = () => {
    return (
        <>
            <RequestProvider>
                <Topbar />
                <div className='flex flex-col justify-between h-screen'>
                    <Routes>
                        {/* <Route path='/' element={<HomePage />} /> */}
                        <Route path="/" element={<Navigate to="/search" />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/image' element={<Image />} />
                        <Route path='/video' element={<Video />} />
                        <Route path='/news' element={<New />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>

                    <Footer />
                </div>
            </RequestProvider>
        </>
    )
}

export default App;