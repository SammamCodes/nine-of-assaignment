import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./Detail";

// Full location list with unique options
const uniqueOptions = [
  { value: "paris", label: "Paris" },
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
  { value: "berlin", label: "Berlin" },
  { value: "madrid", label: "Madrid" },
  { value: "rome", label: "Rome" },
  { value: "amsterdam", label: "Amsterdam" },
  { value: "los-angeles", label: "Los Angeles" },
  { value: "barcelona", label: "Barcelona" },
  { value: "dubai", label: "Dubai" },
  { value: "singapore", label: "Singapore" },
  { value: "sydney", label: "Sydney" },
  { value: "cairo", label: "Cairo" },
  { value: "mumbai", label: "Mumbai" },
  { value: "shanghai", label: "Shanghai" },
  { value: "beijing", label: "Beijing" },
  { value: "mexico-city", label: "Mexico City" },
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "istanbul", label: "Istanbul" },
  { value: "buenos-aires", label: "Buenos Aires" },
  { value: "seoul", label: "Seoul" },
  { value: "sao-paulo", label: "São Paulo" },
  { value: "cape-town", label: "Cape Town" },
  { value: "toronto", label: "Toronto" },
  { value: "chicago", label: "Chicago" },
  { value: "seattle", label: "Seattle" },
  { value: "montreal", label: "Montreal" },
  { value: "manila", label: "Manila" },
  { value: "bangkok", label: "Bangkok" },
  { value: "chennai", label: "Chennai" },
  { value: "saint-petersburg", label: "Saint Petersburg" },
  { value: "vancouver", label: "Vancouver" },
  { value: "jakarta", label: "Jakarta" },
  { value: "santiago", label: "Santiago" },
  { value: "osaka", label: "Osaka" },
  { value: "hanoi", label: "Hanoi" },
  { value: "melbourne", label: "Melbourne" },
  { value: "prague", label: "Prague" },
  { value: "washington", label: "Washington" },
  { value: "kuala-lumpur", label: "Kuala Lumpur" },
  { value: "boston", label: "Boston" },
  { value: "porto", label: "Porto" },
  { value: "quito", label: "Quito" },
  { value: "lima", label: "Lima" },
  { value: "houston", label: "Houston" },
  { value: "bogota", label: "Bogotá" },
  { value: "milan", label: "Milan" },
  { value: "warsaw", label: "Warsaw" },
  { value: "dallas", label: "Dallas" },
  { value: "johannesburg", label: "Johannesburg" },
  { value: "tashkent", label: "Tashkent" },
  { value: "tunis", label: "Tunis" },
  { value: "liverpool", label: "Liverpool" },
  { value: "adelaide", label: "Adelaide" },
  { value: "abidjan", label: "Abidjan" },
  { value: "manchester", label: "Manchester" },
  { value: "medellin", label: "Medellín" },
  { value: "tucson", label: "Tucson" },
  { value: "ho-chi-minh-city", label: "Ho Chi Minh City" },
  { value: "montevideo", label: "Montevideo" },
  { value: "tbilisi", label: "Tbilisi" },
  { value: "port-au-prince", label: "Port-au-Prince" },
  { value: "lagos", label: "Lagos" },
  { value: "moscow", label: "Moscow" },
  { value: "lahore", label: "Lahore" },
  { value: "calcutta", label: "Calcutta" },
  { value: "miami", label: "Miami" },
  { value: "dhaka", label: "Dhaka" },
  { value: "austin", label: "Austin" },
  { value: "hong-kong", label: "Hong Kong" },
  { value: "accra", label: "Accra" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "dublin", label: "Dublin" },
];

const SelectBudgetOption = [
  { icon: "💰", title: "Low", desc: "Budget-friendly travel" },
  { icon: "💵", title: "Medium", desc: "Moderate spending" },
  { icon: "💎", title: "High", desc: "Luxury travel" },
];

const TravelsList = [
  { icon: "👪", title: "Family", desc: "Travel with family" },
  { icon: "👫", title: "Partner", desc: "Romantic getaway" },
  { icon: "🧳", title: "Solo", desc: "Adventure alone" },
];

const Profile = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [tripDays, setTripDays] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelList, setSelectedTravelList] = useState(null);
  const [cart, setCart] = useState([]);

  const handleGenerateTrip = () => {
    if (selectedOption && tripDays && selectedBudget && selectedTravelList) {
      setCart([
        ...cart,
        {
          destination: selectedOption.label,
          days: tripDays,
          budget: selectedBudget.title,
          travelWith: selectedTravelList.title,
        },
      ]);

      // Show a toast with the details of the trip
      toast.success(`Trip generated! Destination: ${selectedOption.label}, Days: ${tripDays}, Budget: ${selectedBudget.title}, Travel With: ${selectedTravelList.title}`);
    }
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout!");
  };

  return (
  
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10 relative">
      <h2 className="font-bold text-3xl">Tell us your Travel Preferences 🏕️🌴</h2>
      <p className="mt-3 text-gray-500">
        Share your ideal travel experiences with us—whether you prefer serene
        mountain treks or vibrant ocean dives, we tailor adventures to your
        eco-conscious desires.
      </p>
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">What is your Destination of Choice?</h2>
        <Select
          options={uniqueOptions}
          value={selectedOption}
          onChange={setSelectedOption}
          placeholder="Search for a destination..."
          className="text-black font-semibold"
        />
        <div className="mt-6">
          <h2 className="text-xl my-3 font-medium">How many days are you planning for your trip?</h2>
          <input
            type="number"
            min="1"
            value={tripDays}
            onChange={(e) => setTripDays(e.target.value)}
            placeholder="Enter number of days..."
            className="p-2 border border-gray-300 rounded w-full"
          />
        </div>
        <div className="mt-6">
          <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOption.map((item, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer border rounded-lg hover:shadow-lg ${
                  selectedBudget === item ? "bg-blue-100" : ""
                }`}
                onClick={() => setSelectedBudget(item)}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl my-3 font-medium">What do you plan to travel with?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {TravelsList.map((item, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer border rounded-lg hover:shadow-lg ${
                  selectedTravelList === item ? "bg-blue-100" : ""
                }`}
                onClick={() => setSelectedTravelList(item)}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleGenerateTrip}
          className="w-full mt-6 bg-blue-500 text-white p-3 rounded-md"
        >
          Generate Trip
        </button>
      </div>
      <div className="mt-10">
        <h2 className="text-xl my-3 font-medium">Your Selected Trips</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {cart.map((trip, index) => (
            <div key={index} className="flex justify-between my-3">
              <div className="font-semibold">{trip.destination}</div>
              <div>{trip.days} days</div>
              <div>{trip.budget}</div>
              <div>{trip.travelWith}</div>
            </div>
          ))}
        </div>
        <button
          onClick={handleCheckout}
          className="w-full mt-6 bg-green-500 text-white p-3 rounded-md"
        >
          Proceed to Checkout
        </button> <br /> <br />
        <Link to="/" className="btn btn-info"><h2 className="font-semibold text-lg">Go to Home Page</h2> </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
