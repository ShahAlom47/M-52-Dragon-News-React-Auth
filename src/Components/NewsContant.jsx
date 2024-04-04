import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const NewsContant = () => {

    const [allNews, setAllNews] = useState([])
    
    
    useEffect(() => {
        fetch('../.././/public/data/news.json')
            .then(res => res.json())
            .then(news => setAllNews(news))

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