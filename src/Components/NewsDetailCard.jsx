import { useNavigate } from "react-router-dom";


const NewsDetailCard = ({data}) => {
    const navigate =useNavigate()

    
 if(data){
    const {title,image_url, details}= data;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{details}</p>
            <div className="card-actions justify-start my-6">
                <button onClick={()=>navigate(-1) } className="btn btn-sm bg-red-500 text-white"> &larr; Back To All News</button>
            </div>
        </div>
    </div>
    );
}

return <span className="loading loading-spinner loading-lg"></span>

};

export default NewsDetailCard;