import zone1 from '../assets/image/qZone1.png';
import zone2 from '../assets/image/qZone2.png';
import zone3 from '../assets/image/qZone3.png';






const QZone = () => {
    return (
        <div className="bg-gray-200 my-5">
             <h1 className=" text-xl font-bold text-gray-500 py-4  px-3 -">Q Zone</h1>
             <div className=' flex flex-col justify-center '>
                <div className=' flex flex-col justify-center border-dashed border-4  border-gray-300  mb-5'><img src={zone1} alt="" /></div>
                <div className='flex flex-col justify-center border-dashed border-4  border-gray-300  mb-5 '><img src={zone2} alt="" /></div>
                <div className=' flex flex-col justify-center border-dashed border-4  border-gray-300  mb-5 '><img src={zone3} alt="" /></div>
              
              
               


             </div>
            
        </div>
    );
};

export default QZone;