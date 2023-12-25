import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import img1 from '../../../assets/red/How-to-Style-a-Quiff.jpg'
import img2 from '../../../assets/red/Instagram-Image-1.jpg'
import img3 from '../../../assets/red/Jewels-of-Prosperity-2023.jpg'
import img4 from '../../../assets/red/Selective-Styles-Help-your-look.jpg'
import moment from 'moment';

const RedJournal = () => {
    return (
        <div>
             <div className="  py-10">
        <div>
            <h1 className=" text-4xl font-bold text-center ">Read Journal</h1>
            <p className=" font-bold text-center">Latest trends and inspirations in fashion design.</p>
        </div>
        <br />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
       <div className="flex justify-evenly items-center p-8">
        <div>
            <img className="w-96" src={img1}  alt=""/>
            <p className=" text-center" >{moment().format(" MMMM Do YYYY") }</p>
            <h2 className=" text-2xl font-bold text-center ">Christmas Gift Guide</h2>
            <p className=" font-semibold text-center">One Self...</p>
        </div>
        <div>
            <img className="w-96" src={img4}  alt=""/>
            <p className=" text-center" >{moment().format(" MMMM Do YYYY") }</p>
            <h2 className=" text-2xl font-bold text-center ">Christmas Gift Guide</h2>
            <p className=" font-semibold text-center">One Self...</p>
        </div>
        <div>
            <img className="w-96" src={img3}  alt=""/>
            <p className=" text-center" >{moment().format(" MMMM Do YYYY") }</p>
            <h2 className=" text-2xl font-bold text-center ">Christmas Gift Guide</h2>
            <p className=" font-semibold text-center">One Self...</p>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img className="w-96 h-96" src={img2}  alt=""/>
            <p className=" text-center" >{moment().format(" MMMM Do YYYY") }</p>
            <h2 className=" text-2xl font-bold text-center ">Christmas Gift Guide</h2>
            <p className=" font-semibold text-center">One Self...</p>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </div> 
        </div>
    );
};

export default RedJournal;