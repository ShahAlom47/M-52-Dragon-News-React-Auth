import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import PropTypes from 'prop-types'; // ES6
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {

   
    const { _id , rating, total_view, title, author, image_url, details } = news;

    // const [readBtn,setReadBtn]=useState(true);
    // const cardDetails= readBtn? details.slice(0,300):details;


    return (
        <div className=" border-2 rounded-xl mb-7">
            <div className=" flex justify-between items-center bg-gray-200 p-3">
                <div id="heading-start" className="flex">
                    <div className="w-12 h-12 rounded-full mr-4 "><img className="w-12 h-12 rounded-full " src={author.img} alt="" /></div>
                    <div>
                        <h2 className="font-semibold text-gray-600">{author?.name}</h2>
                        <p className=" text-gray-500">{author?.published_date}</p>
                    </div>
                </div>
                <div className=" flex ">
                    <button className=" btn btn-sm bg-gray-200 border-none p-0"> <CiBookmark className="w-8 h-8 " /></button>
                    <button className=" btn btn-sm bg-gray-200 border-none p-0"> <CiShare2 className="w-8 h-8 " /></button>



                </div>

            </div>

            <div id="contant" className=" p-4">

                <h1 className="text-xl text-gray-500 font-bold mb-5">{title}</h1>
                <div className=" border-dashed border-2 rounded-md">
                    <img className=" rounded-md" src={image_url} alt="" />
                </div>
                <p className="my-7">{details.slice(0,300)} 
                {
                    // details.length>300&& <span><span  onClick={()=>setReadBtn(!readBtn)} className=" text-orange-500 font-semibold btn btn-link">{readBtn?'Read More': 'Read Less'} </span></span> 
                    details.length>300&& <Link to={`/details/${_id}`}><button className="btn btn-link">Read More ...</button></Link>
                }
                  </p>
                    
            </div>
            <hr />
            <div className=" flex justify-between my-6 px-3">
                <div id="Rating" className=" flex items-center gap-3 ">


                    <div className="rating">
                        <ReactStars
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            Set rating value={rating.number}
                        />,
                    </div>
                    <span className=" mt-2 text-gray-500 font-bold">{rating?.number}</span>
                </div>
                <div id="view " className="flex items-center gap-3">
                    <FaEye />
                    <p className="text-gray-500 font-bold ">{total_view}</p>
                </div>

            </div>

        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}