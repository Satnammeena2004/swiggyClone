import {useEffect, useState} from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  
  
  useEffect(() => {
      function handleOnline() {
          console.log("online");
        setIsOnline(true);
      }
      function handleOffline() {
          console.log("offline");
        setIsOnline(false);
      }
    window.addEventListener("online",handleOnline)
    window.addEventListener("offline",handleOffline)
     
     return ()=>{ 
         window.removeEventListener("online",handleOnline)
         window.removeEventListener("offline",handleOffline)
     }
  }, []);

  return isOnline;
};

export default useOnline;
