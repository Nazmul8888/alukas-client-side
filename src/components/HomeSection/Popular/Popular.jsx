import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";


const Popular = () => {
    const [popular, setPopular] = useState();


    useEffect(()=>{
        fetch('popular.json')
        .then(res=> res.json())
        .then(data=> setPopular(data))
    },[])
    return (
        <div className=" py-10">
            <h1 className=" text-4xl font-bold text-center">Popular Categories</h1>
            <div className=" grid grid-cols-6">
                
                {
                    popular?.map(item=><PopularCard key={popular._id} item={item}></PopularCard>)
                }
            </div>
        </div>
    );
};

export default Popular;