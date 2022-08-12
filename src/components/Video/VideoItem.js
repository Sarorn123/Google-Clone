import React from 'react'
import ReactPlayer from 'react-player';

const VideoItem = ({ video }) => {
    return (
        <div className='mt-5'>
            <a href={video?.link} target="_blank"><h1 className='lg:text-md'>{video?.cite?.domain} </h1>
                <h1 className='lg:text-xl font-semibold text-blue-700 hover:underline cursor-pointer'>{video?.title}</h1>
            </a>
            <div className='flex mt-2'>
                {
                    video?.link && <ReactPlayer
                        url={video?.link}
                        width={'15rem'}
                        height={'8rem'}
                    >
                    </ReactPlayer>
                }

                <div className='ml-5'>
                    <h1 className='lg:text-sm text-gray-500'>
                        {video?.description}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;