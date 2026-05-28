import { useEffect, useState } from "react";

/**
 * Description placeholder
 *
 * @export
 * @param {string} url 
 * @param {FetchEventInit} options 
 */
export function useFetch(url, options = {}) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        fetch(url, {
            ...options,
            headers: {
                'Accept': 'application/json, charset=UTF-8',
                ...options.headers,   
            }
        }).then(res => res.json()).then(data => {
            setLoading(false);
            setData(data);
        }).catch((e) => {
            setErrors(e);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return { 
        loading,data,errors
    }

}