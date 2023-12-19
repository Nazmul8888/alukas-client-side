import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from '../../../assets/banner/banner -1.jpg'
import img2 from '../../../assets/banner/banner -2.jpg'
import img3 from '../../../assets/banner/banner-3.jpg'
import img4 from '../../../assets/banner/banner -4.jpg'

const Banner = () => {
    return (
        <div className="  ml-40 mr-40">
           <Carousel>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2}/>
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
                <div>
                    <img src={img4} />
                    
                </div>
            </Carousel> 
        </div>
    );
};

export default Banner;