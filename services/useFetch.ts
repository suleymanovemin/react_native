import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction:()=>Promise<T>,autoFetch=true) =>{
    const [data,setData] = useState<T|null>(null);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<Error|null>(null);

    const fetchData = async () => {
        setError(null);
        setLoading(true);
        try {
            const data = await fetchFunction();
            setData(data);
        } catch (error) {
            setError(error instanceof Error ? error : new Error(String(error)));
        } finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    },[])

    return {data,loading,error,refetch:fetchData,reset};
}

export default useFetch