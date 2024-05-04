import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";


const NewsContant = () => {

    const [allNews, setAllNews] = useState([])
    
    
    useEffect(() => {
        // fetch('http://localhost:3000/news')
        //     .then(res => res.json())
        //     .then(news => setAllNews(news))

            axios.get('http://localhost:3000/news', {  withCredentials:true })
              .then(function (response) {
                console.log(response);
                setAllNews(response.data)
              })
              .catch(function (error) {
                console.log(error);
              })

    }, [])

   


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