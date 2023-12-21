import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


 import col1 from '../../../assets/collection/coll-1.jpg'
 import col2 from '../../../assets/collection/coll-2.jpg'
 import col3 from '../../../assets/collection/coll-3.jpg'
 import col4 from '../../../assets/collection/coll-4.jpg'
 import col5 from '../../../assets/collection/coll-5.jpg'
 import col6 from '../../../assets/collection/coll-6.jpg'

//  collection banner
import set1 from '../../../assets/collection/be-2 .jpg'
import set2 from '../../../assets/collection/set-2.jpg'

const Collection = () => {
    return (
        <div>
            <div>
            <h1 className=" text-4xl font-bold text-center">-----Autumn Collection----- </h1>
            <p className=' text-center'>Collect your loves with our autumn arrivals.</p>
           <br />
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={col1} alt="" />
        <h1 className=' text-center  '>BRACELETS</h1>
        <h3 className=" uppercase text-center text-red-600   ">Cross Stripes  Bracelet</h3>
        </SwiperSlide>
        <SwiperSlide><img src={col2} alt="" />
        <h1 className=' text-center   '>EARNINGS</h1>
        <h3 className=" uppercase text-center text-red-600   ">Blue Stripes & Stone Earrings</h3>
        </SwiperSlide>
        <SwiperSlide><img src={col3} alt="" />
        <h1 className=' text-center   '>NECKLACES</h1>
        <h3 className=" uppercase text-center text-red-600   "> Paradise Pendant</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={col4} alt="" />
            <h1 className=' text-center   '>BRACELETS</h1>
        <h3 className=" uppercase text-center text-red-600  "> Stripes & Stone Bracelet</h3>
        </SwiperSlide>
        
        <SwiperSlide><img src={col5} alt="" />
        <h1 className=' text-center   '>RINGS</h1>
        <h3 className=" uppercase text-center text-red-600   ">Kalvesna Diamond Twig Ring</h3>
        </SwiperSlide>
        <SwiperSlide><img src={col6} alt="" />
        <h1 className=' text-center   '>BRACELETS</h1>
        <h3 className=" uppercase text-center text-red-600  ">Cross Stripes & Stone Bracelet</h3>
        </SwiperSlide>
        
      </Swiper>
            </div>
            <div className=' flex justify-evenly items-center gap-10'>
            <div>
              <img  src={set1} alt=""data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" />
              {/* <h1 className="text-1xl uppercase text-center -mt-16  text-red-500"> New Bangles Collection </h1> */}
            </div>
            <div>
              <img  src={set2} alt="" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"/>
            </div>
            </div>
        </div>
    );
};

export default Collection;