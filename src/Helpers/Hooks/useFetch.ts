import React, {useState, useEffect} from "react";
import axios from 'axios';
import { excersises } from "../Mock/Excersises";

const useFetch = (url:string) => { 
    
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true)
        axios.get(url).then(response=>{
            if(response){
                setLoading(false)
                /* the cors issue... */
            }
        })
        .catch(()=>{   
                setData(excersises);
                setLoading(false)
              /* 
               normally i would set the error but for the sake of the dummy response i added this code :)
               setError(true); 
              */   
            
        })
    },[url])
    return {data,error,loading}
}

export default useFetch;