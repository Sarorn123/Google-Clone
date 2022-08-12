
const NewsItem = ({news}) => {
  return (
    <div className=' mt-6'>
        <a href={news?.link} target="_blank">
            <h1 className='lg:text-md'>{news?.source?.href}</h1>
            <h1 className='lg:text-xl font-semibold text-blue-700 hover:underline cursor-pointer'>{news.title}</h1>
        </a>
        <h1 className='lg:text-sm text-gray-500'>
           {
            news?.title_detail?.value
           }
        </h1>
        <h1 className='text-gray-400 text-sm mt-2'>{news?.published}</h1>
    </div>
  )
}

export default NewsItem;