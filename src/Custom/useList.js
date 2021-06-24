import { useEffect } from "react";

const useList=(list,key)=>{
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(list));
      }, [list]);

    return JSON.parse(localStorage.getItem(key));
}
export default useList;