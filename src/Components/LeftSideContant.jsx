import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideContant = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('../.././/public/data/categories.json')
            .then(res => res.json())
            .then(news => setCategories(news))

    }, [])

    console.log(categories);

    return (
        <div>
            <h1 className=" text-xl font-bold text-gray-500 mb-4 px-">All Category</h1>
            <div id="category" className=" flex flex-col px-  ">
                {
                    categories.map((category) => <>
                   
                    <NavLink className={'mb-3 rounded-xl '}> <button className="btn  w-full  justify-start pl-5 ">{category.name}</button></NavLink>
                    
                    </> )
                }


            </div>

        </div>
    );
};

export default LeftSideContant;