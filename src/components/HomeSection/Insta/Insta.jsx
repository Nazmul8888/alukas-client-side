import img1 from '../../../assets/insta/Instagram-Image-1.jpg'
import img2 from '../../../assets/insta/Instagram-Image-2.jpg'
import img3 from '../../../assets/insta/Instagram-Image-3.jpg'
import img4 from '../../../assets/insta/Instagram-Image-4.jpg'
import img5 from '../../../assets/insta/Instagram-Image-5.jpg'
import img6 from '../../../assets/insta/Instagram-Image-6.jpg'

const Insta = () => {
    return (
        <div>
        <div>
            <h2 className=' text-3xl font-bold text-center'>Follow Us on Instagram</h2>
            <p className=' text-center'>@presslayoutstheme</p>
        </div>
        <div className=' flex justify-evenly items-center gap-2 p-10'>
            <img className='w-[200px]' src={img1}alt="" />
            <img className='w-[200px]' src={img2}alt="" />
            <img className='w-[200px]' src={img3}alt="" />
            <img className='w-[200px]'src={img4}alt="" />
            <img className='w-[200px]' src={img5}alt="" />
            <img className='w-[200px]' src={img6}alt="" />
        </div>
        </div>
    );
};

export default Insta;