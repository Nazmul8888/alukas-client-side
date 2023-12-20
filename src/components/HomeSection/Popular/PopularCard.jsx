

const PopularCard = ({item}) => {
    const {image, title} = item;
    return (
        <div>
            <div className="card card-compact  py-10  ">
         <figure><img className="rounded-full w-[180px] h-[180px]" src={image} alt="" /></figure>
    <div className="card-body">
    <h2 className="card-title"></h2>
    
    <div className="card-actions">
      <button className=" ml-20 font-bold underline underline-offset-1 border-solid md:border-dotted ">{title}</button>
    </div>
    </div>
    </div>
        </div>
    );
};

export default PopularCard;