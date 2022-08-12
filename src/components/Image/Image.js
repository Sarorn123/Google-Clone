import React, { useEffect } from 'react';
import { useRequest } from '../../Context/RequestContex';
import Loading from '../Loading/Loading';

const Image = () => {
    const { results, loading, requestToApi } = useRequest();

    const gridFunction  = (index) => {
        switch (index){
            case 1:
                return 'h-[10vh] md:h-[25vh] lg:h-[35vh]   col-span-2';
            case 2:
                return 'h-[10vh] md:h-[25vh] lg:h-[35vh]   col-span-1';
            case 3:
                return 'h-[10vh] md:h-[25vh] lg:h-[35vh]   col-span-2';
            case 7:
                return 'h-[10vh] md:h-[25vh] lg:h-[35vh]   col-span-2';

            default:
                return 'h-[10vh] md:h-[25vh] lg:h-[35vh]  ';       
        }
    }

    useEffect(() => {
        requestToApi('/image');
    }, []);

  return (
    <div className='mt-5 w-[98%] mx-auto grid grid-cols-7 gap-5 justify-center items-center'>

        {
           loading ? 
           <div className='w-[95vw] mx-auto'>
                <Loading  /> 
           </div>
           :  
           results.map((result, index) => (
            <div 
                className={gridFunction(index)}
                key={index}>
                <a href={result.link?.href} className='hover:underline' target="_blank">
                    <img src={result.image?.src}  alt='name' className='w-full h-[80%] cursor-pointer object-cover'/>
                    <h1 className='mt-2 text-gray-700 text-[1vw] '>{result.link?.title}</h1>
                </a>
            </div>
        ))
        }


    </div>
  )
}

export default Image