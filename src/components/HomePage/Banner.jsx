import bookImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] container mx-auto rounded-2xl mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
          <img
            src= {bookImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-[56px] font-bold mb-12">Books to freshen up <br /> your bookshelf</h1>
            
            <button className="btn btn-success text-white font-bold">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
