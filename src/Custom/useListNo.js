import { useEffect } from "react";
const useListNo=(ItemNo,key)=>{
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(ItemNo));
      }, [ItemNo]);
    
      return JSON.parse(localStorage.getItem(key));
}
export default useListNo;