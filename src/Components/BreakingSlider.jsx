import Marquee from "react-fast-marquee";

const BreakingSlider = () => {
    return (
        <div className=" bg-slate-200 rounded-lg  flex">
            <button className=" btn btn-ghost bg-red-400">Latest</button>
            <Marquee pauseOnHover={true}  >
                
                <p className=" mr-5">amar sonar bangla ami tumay valobasi </p>
                <p className=" mr-5">amar sonar bangla ami tumay valobasi </p>
                <p className=" mr-5">amar sonar bangla ami tumay valobasi </p>
                
            </Marquee>

        </div>
    );
};

export default BreakingSlider;