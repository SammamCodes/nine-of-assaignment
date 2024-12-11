import { Link } from "react-router-dom";
import 'animate.css';
import TourCards from "./TourCards";
import Footer from "./Footer";
import Arrangement from "./Arrangement";
import Curosol from "./Curosol";
import useDynamicTitle from "./useDynamicTitle";
import AdventureDetails from "./AdventureDetails";

const Home = () => {
  useDynamicTitle();
    const handleClick = () => {
        window.open('https://youtu.be/fxLQoVsFiyQ?si=tihk2quC7rswTCYJ', '_blank');
    };

    return (
        <div className="flex items-center px-4 sm:px-8 md:px-16 lg:px-56 gap-6 flex-col">
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-[32px] text-center mt-10 sm:mt-12 lg:mt-16 animate__animated animate__fadeInDown">
                <span className="text-[#ff5733]">Eco-Adventures for the Conscious Traveler:</span> <br />
                Discover Sustainable Trekking and Diving Destinations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 text-center max-w-screen-md animate__animated animate__fadeInUp animate__delay-1s">
                Experience the wonders of the ocean with eco-friendly diving trips that promote marine conservation. Explore vibrant coral reefs and encounter fascinating marine life, all while supporting responsible tourism practices that protect our oceans.
            </p>

            {/* Favorite Tour Places Section */}
            <div className="w-full max-w-screen-lg mt-10">
                <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6">Most Favorite Tour Adventure</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {[
                        { name: "River Adventures", img: "https://cdn.pixabay.com/photo/2016/11/14/03/03/woman-1822455_640.jpg", tour: "3 Tour" },
                        { name: "Forest Expeditions", img: "https://cdn.pixabay.com/photo/2023/09/09/17/52/ai-generated-8243562_640.jpg", tour: "5 Tour" },
                        { name: "Trail Explorations", img: "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg", tour: "4 Tour" },
                        { name: "Camping Retreats", img: "https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_640.jpg", tour: "3 Tour" },
                        { name: "Underwater adventure", img: "https://cdn.pixabay.com/photo/2017/08/01/22/10/people-2568247_640.jpg", tour: "2 Tour" }
                    ].map((place, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-4 hover:bg-blue-100 transition-all duration-300 animate__animated animate__zoomIn hover:animate__rubberBand"
                        >
                            <div className="w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full border border-gray-300">
                                <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className="text-lg font-semibold mt-2">{place.name}</h4>
                            <p className="text-sm text-gray-500">{place.tour}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* DaisyUI Carousel */}
            <div className="carousel w-full max-w-md sm:max-w-lg md:max-w-2xl rounded-lg shadow-lg animate__animated animate__zoomIn animate__delay-2s mt-8">
                {/* Add your carousel items */}
            </div>
<Curosol></Curosol>
            {/* Button to start */}
            <Link to={'/profile'}>
                <button className="btn btn-secondary w-full sm:w-auto px-6 py-3 mt-6 sm:mt-8 animate__animated animate__heartBeat animate__delay-3s">
                    <b className="font-semibold text-lg sm:text-2xl">Get Started, It's Free</b>
                </button>
            </Link>

            <TourCards />

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg mt-12">
                {/* User Profile Card */}
                <div className="max-w-sm p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
                    <img src="https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_640.jpg" alt="Profile Image" className="w-24 h-24 rounded-full shadow-lg mb-3" />
                    <h2 className="text-lg font-bold text-gray-700">Corey Tawney</h2>
                    <p className="text-green-500 text-sm">Available for work</p>
                    Link<button className="mt-4 bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow hover:bg-blue-600">
                        Portfolio
                    </button>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-md p-4 bg-white shadow-md rounded-lg">
                    <p className="text-gray-800 font-medium">"Emma is an amazing producer!"</p>
                    <p className="text-sm text-gray-500 mt-1">
                        She put together one of the best sets that I've ever been on!
                    </p>
                    <div className="mt-2 flex items-center">
                        <img src="https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_640.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
                        <div className="ml-3">
                            <p className="text-sm font-bold">Robert M.</p>
                            <span className="text-xs text-blue-500">PRO</span>
                        </div>
                    </div>
                </div>

                {/* Free Course Card */}
                <div className="max-w-sm bg-white shadow-md rounded-lg">
                    <img src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg" alt="Course Thumbnail" className="w-full h-40 object-cover rounded-t-lg" />
                    <div className="p-4">
                        <span className="text-xs bg-yellow-300 text-yellow-700 px-2 py-1 rounded-full">FREE</span>
                        <h3 className="text-lg font-bold mt-2">Contracts to Protect Your Travel </h3>
                        <p className="text-gray-600 text-sm mt-1">30 minutes</p>
                    </div>
                </div>

                {/* Video Course Card */}
                <div className="max-w-sm bg-white shadow-md rounded-lg">
                    <div className="relative">
                        <img src="https://img.freepik.com/free-vector/travel-youtube-thumbnail-with-hand-drawn-elements_23-2148901663.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid" alt="Video Thumbnail" className="w-full h-40 object-cover rounded-t-lg" />
                        <button
                            onClick={handleClick}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                        >
                            ▶
                        </button>
                    </div>
                    <div className="p-4">
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">PRODUCTION</span>
                        <h3 className="text-lg font-bold mt-2">Travel Coverage — A Step-by-Step Guide</h3>
                        <p className="text-gray-600 text-sm mt-1">By Cameron E. West • Apr 10, 2020</p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-green-200 to-blue-300">
  {/* Center Circle */}
  <div className="absolute w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-slate-300 shadow-lg flex justify-center items-center text-center">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-600"></h2>
  </div>

  {/* Outer Images */}
  <div className="absolute w-[20rem] sm:w-[25rem] md:w-[30rem] h-[20rem] sm:h-[25rem] md:h-[30rem] rounded-full">
    
    {/* Thekkady */}
    <div
      className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/14/03/03/woman-1822455_640.jpg')`,
      }}
    >
      <p className="text-xs sm:text-sm font-bold text-center text-white bg-black bg-opacity-60 py-1 rounded-b-lg">Thekkady</p>
    </div>

    {/* Alappuzha */}
    <div
      className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg top-20 left-8 sm:left-12 md:left-8 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_640.jpg')`,
      }}
    >
      <p className="text-xs sm:text-sm font-bold text-center text-white bg-black bg-opacity-60 py-1 rounded-b-lg">Alappuzha</p>
    </div>

    {/* Cochin */}
    <div
      className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg top-40 left-2/4 transform -translate-x-3/4 -translate-y-1/2"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2023/09/09/17/52/ai-generated-8243562_640.jpg')`,
      }}
    >
      <p className="text-xs sm:text-sm font-bold text-center text-white bg-black bg-opacity-60 py-1 rounded-b-lg">Cochin</p>
    </div>

    {/* Kumarakom */}
    <div
      className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg bottom-12 left-8 sm:left-12 md:left-8 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/21/16/03/campfire-1846142_640.jpg')`,
      }}
    >
      <p className="text-xs sm:text-sm font-bold text-center text-white bg-black bg-opacity-60 py-1 rounded-b-lg">Kumarakom</p>
    </div>

    {/* Munnar */}
    <div
      className="absolute w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-cover bg-center border-4 border-white shadow-lg bottom-4 right-12 sm:right-8 md:right-12 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2022/09/21/10/42/plantation-7470027_640.jpg')`,
      }}
    >
      <p className="text-xs sm:text-sm font-bold text-center text-white bg-black bg-opacity-60 py-1 rounded-b-lg">Munnar</p>
    </div>
  </div>
</div>
<Arrangement></Arrangement>
<AdventureDetails></AdventureDetails>
<Footer></Footer>

        </div>
    );
};

export default Home;
