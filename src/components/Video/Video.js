import React from 'react'
import { useEffect } from 'react';
import { useRequest } from '../../Context/RequestContex';
import Loading from '../Loading/Loading';
import VideoItem from './VideoItem';

const Video = () => {
  const { results, loading , requestToApi} = useRequest();

    useEffect(() => {
        requestToApi('/video');
    }, []);

  return (
    <div className='w-[90%] lg:w-[70%] mx-auto'>

      {
        loading ? <Loading  /> 
        :
        results.map((result, index) => (
          <VideoItem video={result} key={index} />
        ))
      }

    </div>
  )
}

export default Video