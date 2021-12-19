
import  {useState, useEffect} from "react";
import axios from "axios";

function useAuth(code){
 const [accessToken, setAccessToken] = useState();
 const [refreshToken, setRefreshToken] = useState();
 const [expiresIn, setExpiresIn] = useState();
  
 useEffect(()=>{
   axios
    .post("https://myspotify-server.herokuapp.com/login", {code})
    .then(res=>{
        console.log("res.data ->",res.data)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({}, null, "https://stupefied-tesla-5734b1.netlify.app")
    })
    .catch((err)=>{
        console.log("errbc = ", err);
        window.location="https://stupefied-tesla-5734b1.netlify.app"
    })
 }, [code])

 useEffect(()=>{
     if(!refreshToken || !expiresIn) return
     const timeInterval = setInterval(()=>{
        axios
        .post("https://myspotify-server.herokuapp.com/refresh", {refreshToken})
        .then(res=>{
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
            })
        .catch((err)=>{
            console.log("err = ", err);
            window.location="https://stupefied-tesla-5734b1.netlify.app/"
            })
     }, (expiresIn-60)*1000)
     return ()=>clearInterval(timeInterval)
 }, [refreshToken, expiresIn])

 return accessToken;
}

export default useAuth;