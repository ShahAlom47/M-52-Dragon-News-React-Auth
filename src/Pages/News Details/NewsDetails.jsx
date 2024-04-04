import { useParams } from "react-router-dom";
import Header from "../../Components/Header";
import Navbar from "../../Components/Navbar";

const NewsDetails = () => {
    const { id } = useParams()
    console.log(id);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
          ditails {id}
            
        </div>
    );
};

export default NewsDetails;