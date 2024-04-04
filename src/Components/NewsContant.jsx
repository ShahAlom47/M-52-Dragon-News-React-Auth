import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";


const NewsContant = () => {

    const [allNews, setAllNews] = useState([])
    
    useEffect(() => {
        fetch('../.././/public/data/news.json')
            .then(res => res.json())
            .then(news => setAllNews(news))

    }, [])

    // console.log(allNews)
    return (
        <div>
            <h1 className=" text-2xl font-bold text-gray-500 mb-4">Dragon News Home</h1>
            <div>
                {
                    allNews.map((news,index)=> <NewsCard key={ index} news={news}> </NewsCard>)
                }
                
            </div>


        </div>
    );
};

export default NewsContant;