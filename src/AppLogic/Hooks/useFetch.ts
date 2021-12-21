import React, {useState, useEffect} from "react";
import axios from 'axios';
import { HeroResponse } from "../../Data/data";

const useFetch = (url:string) => { 
    const [data, setData] = useState<HeroResponse>({
        count: 0,
        limit: 0,
        offset: 0,
        results: [],
        total: 0
    });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get(url).then(response=>{
            if(response && response.data && response.data.data){
                setLoading(false)
                setData(response.data.data);
            }
        })
        .catch(err=>{   
             setError(true);   
        })
    },[url])
    return {data,error,loading}
}

export default useFetch;