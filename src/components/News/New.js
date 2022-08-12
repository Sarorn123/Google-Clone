import React, { useEffect } from 'react'
import { useRequest } from '../../Context/RequestContex';
import Loading from '../Loading/Loading';
import NewsItem from './NewsItem';

const New = () => {

  const { results, loading, requestToApi } = useRequest();

  useEffect(() => {
      requestToApi('/news');
  },[]);

  return (
    <div className='w-[70%] mx-auto'>
     {
      loading ? <Loading  />
      :
      results.map((news, index) => (
        <NewsItem news={news} key={index} />
      ))
     }
    </div>
  )
}

export default New;