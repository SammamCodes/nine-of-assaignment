import { Link, useLocation } from "react-router-dom";

const Detail = () => {
  const { state: destination } = useLocation(); // Extracting the destination object passed via Link

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-gray-600 text-center">No destination data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl">
        <img
          src={destination.img}
          alt={destination.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {destination.name}
        </h2>
        <p className="text-gray-600 mb-2">
          <strong>Region:</strong> {destination.region}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Price:</strong> {destination.price} 
          {destination.sale && (
            <span className="ml-2 text-red-400 line-through">
              {destination.sale}
            </span>
          )}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Adventure Cost:</strong> {destination.adventureCost}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Duration:</strong> {destination.duration}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Location:</strong> {destination.location}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Description:</strong> {destination.shortDescription}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          What's Included:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {destination.includedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Eco-Friendly Features:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {destination.ecoFriendlyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Special Instructions:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          {destination.specialInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            <strong>Max Group Size:</strong> {destination.maxGroupSize}
          </p>
          <Link to="/"><button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-sm font-medium rounded shadow hover:from-blue-600 hover:to-blue-700">
            Book Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
