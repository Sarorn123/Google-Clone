import React from 'react'

const SearchItem = ({news}) => {

    const getDomainFromUrl = (url) => {
        try {
            let domain = (new URL(url));
            return domain.hostname;
        } catch (error) {
            return "";
        } 
    }

    return (
        <div className=' mt-6'>
            <a href={news?.link} target="_blank">
                <h1 className='lg:text-md'>{getDomainFromUrl(news?.link)}</h1>
                <h1 className='lg:text-xl font-semibold text-blue-700 hover:underline cursor-pointer'>{news?.title}</h1>
            </a>
            <h1 className='lg:text-sm text-gray-500'>
               {news?.description}
            </h1>
        </div>
    )
}

export default SearchItem;