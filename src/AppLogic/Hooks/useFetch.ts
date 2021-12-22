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
             setError(true);   
        })
    },[url])
    return {data,error,loading}
}

export default useFetch;