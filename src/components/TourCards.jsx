import React from "react";
import "animate.css"; // Importing Animate.css for animations
import { Link } from "react-router-dom";
import AdventureDetails from "./AdventureDetails";

const TourCards = () => {
  const destinations = [
    {
      name: "Koh Samui",
      region: "Europe",
      type: ["Cultural", "Relax"],
      price: "$700",
      img: "https://cdn.pixabay.com/photo/2020/03/29/15/17/temple-4981094_640.jpg",
      shortDescription: "A serene destination known for its beautiful beaches and cultural sites.",
      adventureCost: "$350",
      bookingAvailability: "Available",
      location: "Koh Samui, Thailand",
      duration: "7 Days",
      adventureLevel: "Moderate",
      includedItems: ["Hotel Stay", "Cultural Tours", "Beach Access"],
      ecoFriendlyFeatures: ["Solar-powered resorts", "Sustainable tourism practices"],
      maxGroupSize: 20,
      specialInstructions: ["Pack light", "Bring sunscreen"],
    },
    {
      name: "Bora Bora",
      region: "Asia",
      type: ["History", "Cultural"],
      price: "$50",
      sale: "$1000",
      img: "https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg",
      shortDescription: "A tropical paradise known for its rich history and vibrant culture.",
      adventureCost: "$200",
      bookingAvailability: "Limited",
      location: "Bora Bora, French Polynesia",
      duration: "5 Days",
      adventureLevel: "Low",
      includedItems: ["Historical Tours", "Cultural Experiences", "Snorkeling Gear"],
      ecoFriendlyFeatures: ["Marine conservation", "Eco-resorts"],
      maxGroupSize: 15,
      specialInstructions: ["Bring your own water shoes", "Check availability before booking"],
    },
    {
      name: "Maldives",
      region: "Oceania",
      type: ["Sport", "Relax"],
      price: "$400",
      img: "https://cdn.pixabay.com/photo/2015/11/15/14/30/veligandu-island-1044366_640.jpg",
      shortDescription: "Famous for its clear waters and opportunities for water sports.",
      adventureCost: "$500",
      bookingAvailability: "Available",
      location: "Maldives",
      duration: "10 Days",
      adventureLevel: "High",
      includedItems: ["Scuba Diving", "Snorkeling Equipment", "Beach Access"],
      ecoFriendlyFeatures: ["Coral reef preservation", "Solar energy-powered resorts"],
      maxGroupSize: 10,
      specialInstructions: ["Bring swimwear", "Consider reef-safe sunscreen"],
    },
    {
      name: "Phuket",
      region: "Thailand",
      type: ["Relax", "Cultural"],
      price: "$1200",
      img: "https://cdn.pixabay.com/photo/2017/09/26/15/37/buddah-2789015_640.jpg",
      shortDescription: "A bustling city combining relaxing beaches with cultural landmarks.",
      adventureCost: "$300",
      bookingAvailability: "Available",
      location: "Phuket, Thailand",
      duration: "6 Days",
      adventureLevel: "Moderate",
      includedItems: ["Cultural Tours", "Beach Access", "Local Cuisine Experience"],
      ecoFriendlyFeatures: ["Eco-friendly hotels", "Sustainable tourism activities"],
      maxGroupSize: 25,
      specialInstructions: ["Bring light clothing", "Respect local customs"],
    },
    {
      name: "Seychelles",
      region: "Netherlands",
      type: ["History", "Sport"],
      price: "$1500",
      img: "https://cdn.pixabay.com/photo/2020/03/29/12/10/beach-4980472_640.jpg",
      shortDescription: "A pristine beach destination rich in history and outdoor activities.",
      adventureCost: "$600",
      bookingAvailability: "Limited",
      location: "Seychelles",
      duration: "8 Days",
      adventureLevel: "Moderate",
      includedItems: ["Beach Access", "Historical Tours", "Water Sports Equipment"],
      ecoFriendlyFeatures: ["Wildlife conservation", "Recyclable materials used"],
      maxGroupSize: 18,
      specialInstructions: ["Protect marine life", "Check weather before booking"],
    },
    {
      name: "Hawaii",
      region: "Italy",
      type: ["Sport", "Relax"],
      price: "$730",
      sale: "$950",
      img: "https://cdn.pixabay.com/photo/2016/11/29/06/38/hawaii-1867849_640.jpg",
      shortDescription: "Famous for its stunning landscapes and adventure-filled experiences.",
      adventureCost: "$450",
      bookingAvailability: "Available",
      location: "Hawaii, USA",
      duration: "12 Days",
      adventureLevel: "High",
      includedItems: ["Surf Lessons", "Hiking Trails", "Cultural Events"],
      ecoFriendlyFeatures: ["Sustainable resorts", "Eco-tours"],
      maxGroupSize: 12,
      specialInstructions: ["Bring hiking shoes", "Respect local traditions"],
    },
    {
      name: "Santorini",
      region: "Greece",
      type: ["Cultural", "Relax"],
      price: "$900",
      img: "https://cdn.pixabay.com/photo/2020/10/14/19/49/santorini-5655299_640.jpg",
      shortDescription: "Known for its breathtaking views, ancient culture, and relaxing vibe.",
      adventureCost: "$400",
      bookingAvailability: "Available",
      location: "Santorini, Greece",
      duration: "7 Days",
      adventureLevel: "Moderate",
      includedItems: ["Cultural Tours", "Wine Tasting", "Beach Access"],
      ecoFriendlyFeatures: ["Eco-friendly hotels", "Water conservation practices"],
      maxGroupSize: 20,
      specialInstructions: ["Bring a hat", "Wear comfortable shoes"],
    },
    {
      name: "Kyoto",
      region: "Japan",
      type: ["History", "Cultural"],
      price: "$450",
      img: "https://cdn.pixabay.com/photo/2023/03/03/09/04/temple-7827224_640.jpg",
      shortDescription: "A city steeped in history with beautiful temples and traditional culture.",
      adventureCost: "$300",
      bookingAvailability: "Available",
      location: "Kyoto, Japan",
      duration: "5 Days",
      adventureLevel: "Low",
      includedItems: ["Temple Tours", "Cultural Experience", "Tea Ceremony"],
      ecoFriendlyFeatures: ["Cultural heritage preservation", "Sustainable transportation"],
      maxGroupSize: 15,
      specialInstructions: ["Wear appropriate clothing", "Be respectful at temples"],
    },
    {
      name: "Bali",
      region: "Indonesia",
      type: ["Relax", "Adventure"],
      price: "$800",
      img: "https://cdn.pixabay.com/photo/2016/11/14/02/51/rice-plantation-1822444_640.jpg",
      shortDescription: "A tropical destination offering a blend of adventure and relaxation.",
      adventureCost: "$350",
      bookingAvailability: "Available",
      location: "Bali, Indonesia",
      duration: "9 Days",
      adventureLevel: "High",
      includedItems: ["Adventure Tours", "Beach Access", "Yoga Sessions"],
      ecoFriendlyFeatures: ["Eco-resorts", "Rainforest protection programs"],
      maxGroupSize: 20,
      specialInstructions: ["Bring insect repellent", "Check weather conditions"],
    },
    {
      name: "Swiss Alps",
      region: "Switzerland",
      type: ["Sport", "Nature"],
      price: "$1200",
      img: "https://cdn.pixabay.com/photo/2024/01/07/10/59/mountains-8492823_1280.jpg",
      shortDescription: "A stunning destination for outdoor sports and nature enthusiasts.",
      adventureCost: "$700",
      bookingAvailability: "Available",
      location: "Swiss Alps, Switzerland",
      duration: "14 Days",
      adventureLevel: "High",
      includedItems: ["Skiing", "Hiking", "Mountain Views"],
      ecoFriendlyFeatures: ["Sustainable mountain resorts", "Wildlife conservation"],
      maxGroupSize: 10,
      specialInstructions: ["Bring warm clothing", "Prepare for high altitudes"],
    },
    {
      name: "Paris",
      region: "France",
      type: ["Cultural", "Romantic"],
      price: "$1400",
      img: "https://cdn.pixabay.com/photo/2017/09/22/12/29/paris-2775405_640.jpg",
      shortDescription: "The city of love, offering rich culture and romantic experiences.",
      adventureCost: "$500",
      bookingAvailability: "Available",
      location: "Paris, France",
      duration: "7 Days",
      adventureLevel: "Low",
      includedItems: ["Museum Tours", "City Walks", "Eiffel Tower Visit"],
      ecoFriendlyFeatures: ["Public transportation", "Eco-tourism experiences"],
      maxGroupSize: 25,
      specialInstructions: ["Bring a camera", "Book tickets in advance"],
    },
    {
      name: "Maui",
      region: "Hawaii",
      type: ["Relax", "Adventure"],
      price: "$800",
      img: "https://cdn.pixabay.com/photo/2022/09/21/10/42/plantation-7470027_640.jpg",
      shortDescription: "A beautiful blend of beaches and adventure activities in Hawaii.",
      adventureCost: "$400",
      bookingAvailability: "Available",
      location: "Maui, Hawaii",
      duration: "7 Days",
      adventureLevel: "Moderate",
      includedItems: ["Surf Lessons", "Snorkeling", "Hiking Trails"],
      ecoFriendlyFeatures: ["Coral reef protection", "Sustainable resorts"],
      maxGroupSize: 20,
      specialInstructions: ["Bring a swimsuit", "Respect local traditions"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-8 animate__animated animate__fadeIn">
        Most Favorite Tour Adventure
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-white to-gray-50 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300 transform hover:-translate-y-2 animate__animated animate__zoomIn"
            style={{ animationDelay: `${index * 100}ms` }} // Corrected here
          >
            <img
              src={destination.img}
              alt={destination.name}
              className="w-full h-48 sm:h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {destination.name}
              </h3>
              <p className="text-gray-600 mb-4">{destination.region}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.type.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm px-3 py-1 bg-green-100 text-green-600 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div>
                  {destination.sale && (
                    <span className="line-through text-red-400 mr-2">
                      {destination.sale}
                    </span>
                  )}
                  <p className="text-lg font-bold text-gray-800">{destination.price}</p>
                </div>
                <Link to="/details" state={destination}>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-sm font-medium rounded shadow hover:from-blue-600 hover:to-blue-700">
                    Explore Now
                  </button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCards;
