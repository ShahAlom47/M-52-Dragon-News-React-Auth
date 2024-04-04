import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";
import RightSideContant from "../../Components/RightSideContant";
import NewsDetailCard from "../../Components/NewsDetailCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
    const { id } = useParams()
    console.log(id);

    const [allNews, setAllNews] = useState([])
   

    useEffect(() => {
        fetch('../.././/public/data/news.json')
            .then(res => res.json())
            .then(news => setAllNews(news))

    }, [])

    // console.log(allNews);
    const data = allNews.find(news=> news._id ===id )


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid gap-8 grid-cols-6">
                <div className=" col-span-4">
                  <NewsDetailCard data={data}> </NewsDetailCard>

                </div>
                <div className="col-span-2">
                    <RightSideContant></RightSideContant>
                </div>


            </div>

        </div>
    );
};

export default NewsDetails;