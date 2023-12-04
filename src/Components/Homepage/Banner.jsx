/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 text-white bannerbg">
      <div className="flex flex-col h-[550px] justify-center items-center">
        <div className="w-[90%] py-10 lg:w-[80%] text-center">
          <p className="text-2xl lg:text-4xl mb-3">
            <span className="font-logoFont text-white">
              Pick
              <span className="text-indigo-300 dark:text-indigo-400">
                'n Drop
              </span>
              <br />
            </span>
            Simplifying Parcel Delivery <br /> for You!
          </p>
          <p className="text-xs md:text-sm text-gray-300 px-5 lg:px-10">
            Experience the ease of seamless parcel delivery with Pick'n Drop!
            Our user-friendly platform ensures swift and reliable service,
            making sending and receiving packages a breeze. Wherever you are,
            whenever you need it trust Pick'n Drop to deliver with speed and
            convenience.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="mb-2 bg-slate-600 opacity-70 px-3 py-1 rounded-md text-xl font-thin text-white">
          Search Here
        </span>
        <input
          type="text"
          name="search"
          placeholder="Type here..."
          className="px-2 py-1 rounded text-sm bg-slate-600 text-white"
        />
        <button className="px-3 py-1 mt-1 rounded-md border-indigo-500 border bg-indigo-600 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
