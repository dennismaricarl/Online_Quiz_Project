import { useEffect } from "react";

useEffect( async () => {
    try{
      const response = await fetch('http://localhost:8080/questions')
      const result = response.json()
      console.log(result)
      
    }catch(error){
      console.log(error)
    }
   })