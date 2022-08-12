import axios from "axios";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { getKeyword } from "../hook/localstorageHook";

const RequestContext = createContext();

export function useRequest(){
    return useContext(RequestContext);
}

export function RequestProvider ({children}) {

    const [results, setResults] = useState([]);
    const [keyword, setKeyword] = useState(getKeyword());
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        localStorage.setItem('keyword', keyword);
    }, [keyword]);

    const getAllData = async (url, type) => {
        setLoading(true);
        const response = await axios.get(url, {
            headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'EU',
            'X-RapidAPI-Key':  process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        });

        if(type == '/search') setResults(response.data.results);
        if(type == '/image') setResults(response.data.image_results);
        if(type == '/video') setResults(response.data.results);
        if(type == '/news') setResults(response.data.entries);
        setLoading(false);
    }

    const requestToApi = (type) => {

       if(keyword !== ""){
        let url = "";
        switch (type) {
            case "/search":
                url =  `${process.env.REACT_APP_API_URL + type}/q=${keyword}&num=20`;
                getAllData(url, type);
                break;
            case "/image":
                url =  `${process.env.REACT_APP_API_URL + type}/q=${keyword}&num=40`;
                getAllData(url, type);
                break;
            case "/video":
                url =  `${process.env.REACT_APP_API_URL + type}/q=${keyword}&num=20`;
                getAllData(url, type);
                break;
            case "/news":
                url =  `${process.env.REACT_APP_API_URL + type}/q=${keyword}&num=20`;
                getAllData(url, type);
                break;
            }
        }

    }

    return (
        <RequestContext.Provider value={{results, setResults, requestToApi, keyword, setKeyword, loading}}>
            {children}
        </RequestContext.Provider>
    )
}