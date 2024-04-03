import BreakingSlider from "../../Components/BreakingSlider";

import Header from "../../Components/Header";
import LeftSideContant from "../../Components/LeftSideContant";
import Navbar from "../../Components/Navbar";
import NewsContant from "../../Components/NewsContant";
import RightSideContant from "../../Components/RightSideContant";

const Home = () => {
    return (
        <>
            <header>
                <Header></Header>
                <BreakingSlider></BreakingSlider>
                <Navbar></Navbar>

            </header>
            <section className="grid gap-4 grid-cols-1  lg:grid-cols-4 ">
                <div>
                    <LeftSideContant></LeftSideContant>
                </div>
                <div className="col-span-2">
                    <NewsContant ></NewsContant>
                </div>
                <div>
                    <RightSideContant></RightSideContant>
                </div>

            </section>
        </>
    );
};

export default Home;