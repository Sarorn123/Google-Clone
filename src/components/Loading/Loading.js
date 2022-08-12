import React from 'react'

const Loading = () => {
    return (
        <div className='h-full w-full flex justify-center items-center mt-10'>
            <div className='border-blue-500 border-r-0 border-4 w-10 h-10 rounded-full flex justify-center items-center animate-spin-slow'></div>
        </div>
    )
}

export default Loading