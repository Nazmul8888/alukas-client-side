const CustomerReview = () => {
  return (
    <div>
      <div className=" flex justify-evenly items-center bg-[#52D3D8] py-10 ">
        <div >
          <a
            href="#"
            className="flex flex-col items-center bg-[#52D3D8] border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96  md:rounded-none md:rounded-s-lg"
              src="https://i.ibb.co/Tbfv5RC/braided-band-ring-2.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                New Bangles collection
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Catch the highlight in the roof
              </p>
              <div className="card-actions justify-end">
                <button className=" btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Shop More</button>
                </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="flex flex-col items-center bg-slate-500 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96  md:rounded-none md:rounded-s-lg"
              src="https://i.ibb.co/z2XxrJ9/braided-band-ring-1.webp"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Culture of Ring Design 
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Pasha  de Cartier Collection
              </p>
              <div className="card-actions justify-end">
                <button className=" btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Shop More</button>
                </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
