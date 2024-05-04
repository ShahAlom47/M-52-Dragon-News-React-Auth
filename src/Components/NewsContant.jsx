import { useContext, useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import { AuthContext } from "../AuthProbider/AuthProvider";


const NewsContant = () => {
    const {user,loading}=useContext(AuthContext)
   const userEmail = user?.email
    console.log(userEmail,loading);

    const [allNews, setAllNews] = useState([])
    
  

    useEffect(() => {
      
        if(loading===false){

        
     
      axios.get(`http://localhost:3000/news/${userEmail}`)
              .then(function (response) {
                console.log(response);
                setAllNews(response.data)
              })
              .catch(function (error) {
                console.log(error.response);
              })
            }
    }, [loading])

   


    return (
        <div>
            <h1 className=" text-xl font-bold text-gray-500 mb-4">Dragon News Home</h1>
            <div>
                {
                    allNews.map((news,index)=> <NewsCard key={ index} news={news}> </NewsCard>)
                }
                
            </div>
            <div> <button> </button></div>


        </div>
    );
};

export default NewsContant;