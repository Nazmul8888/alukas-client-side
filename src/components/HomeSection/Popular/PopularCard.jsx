

const PopularCard = ({item}) => {
    const {image, title} = item;
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl">
         <figure><img src={image} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title"></h2>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{title}</button>
    </div>
    </div>
    </div>
        </div>
    );
};

export default PopularCard;