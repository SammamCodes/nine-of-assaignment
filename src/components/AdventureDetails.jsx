

import { useState } from 'react';

const AdventureDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Get the current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Handle button click logic
    const handleTalkWithExpertClick = () => {
        if (currentHour >= 10 && currentHour <= 20) {
            // Open Google Meet if time is between 10:00 AM and 8:00 PM
            window.open("https://meet.google.com/xyz-abc-def", "_blank");
        } else {
            // Show consultation time modal if time is outside consultation hours
            setIsModalOpen(true);
        }
    };

    // Close modal function
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Adventure Header Section */}
            <section className="bg-cover bg-center h-96 relative" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_640.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white text-center p-8">
                    <h1 className="text-4xl font-bold">Adventure Information</h1>
                    <p className="mt-4 text-lg">Your guide to an unforgettable adventure.</p>
                </div>
            </section>

            {/* Adventure Details Section */}
            <section className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">Adventure Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Description</h3>
                        <p className="text-gray-700">Detailed description of the adventure with all the tips, preparation needed, and how to enjoy it to the fullest.</p>

                        <h3 className="text-2xl font-semibold">Location</h3>
                        <p className="text-gray-700">Detailed information about the location, including the area, what to expect, and best seasons to visit.</p>

                        <h3 className="text-2xl font-semibold">Weather</h3>
                        <div className="text-gray-700">
                            <p>Check out the weather forecast here or integrate a weather widget/API.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Duration</h3>
                        <p className="text-gray-700">3-5 days (depending on the route you choose).</p>

                        <h3 className="text-2xl font-semibold">Difficulty</h3>
                        <p className="text-gray-700">Moderate to advanced. Ideal for experienced adventurers.</p>

                        <h3 className="text-2xl font-semibold">Required Equipment</h3>
                        <ul className="list-disc pl-5 text-gray-700">
                            <li>Hiking boots</li>
                            <li>Backpack</li>
                            <li>Waterproof jacket</li>
                            <li>First-aid kit</li>
                        </ul>
                    </div>
                </div>

                {/* Talk with Expert Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={handleTalkWithExpertClick}
                        className="bg-blue-500 text-white py-3 px-6 rounded-full text-xl shadow-lg hover:bg-blue-700"
                    >
                        Talk with Expert
                    </button>
                </div>
            </section>

            {/* Modal for Consultation Time */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full text-center">
                        <h2 className="text-2xl font-semibold mb-4">Consultation Hours</h2>
                        <p className="text-gray-700">Our experts are available for consultations between 10:00 AM and 8:00 PM. Please try again during those hours.</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdventureDetails;
