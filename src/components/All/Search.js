import React, { useEffect } from 'react'
import { useRequest } from '../../Context/RequestContex'
import Loading from '../Loading/Loading';
import SearchItem from './SearchItem';

function Search() {

    const { results, loading , requestToApi} = useRequest();

    useEffect(() => {
        requestToApi('/search');
    }, []);

    return (
        <div className='w-[70%] mx-auto'>
            {
                loading ? 
                <Loading />
                : 
                results.map((news, index) => (
                    <SearchItem news={news} key={index} />
                ))
            }
        </div>
    )
}

export default Search