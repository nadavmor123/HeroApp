import React, {useState, useEffect} from "react";
import axios from 'axios';

const useFetch = <T>(url:string, initialValue:T) => { 
    
    const [data, setData] = useState<T>(initialValue);
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
        .catch(()=>{   
            /* this is also intentional :) since i know that your ip 
            is not listed on my marvel account and that your api call 
            will fail i set up mock data instead, but left all the logic 
            here so that you could see how i originally handeled the API work */
            setLoading(false)
             /*setError(true);*/  
        })
    },[url])
    return {data,error,loading}
}

export default useFetch;