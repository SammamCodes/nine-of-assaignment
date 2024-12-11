import React, { useState } from 'react';

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  // Function to open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('your-image-url.jpg')" }}>
      <div className="bg-white bg-opacity-70 py-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800">Our Rooms</h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="grand-suite.jpg" alt="Grand Suite" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Grand Suite</h2>
              <p className="text-gray-600 mb-4">
                Spacious, bright, and outward-facing rooms measuring 18 m² with stunning views.
              </p>
              <button
                onClick={() => openModal('News about Grand Suite: Book now and get a discount for the holidays!')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="superior-suite.jpg" alt="Superior Suite" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Superior Suite</h2>
              <p className="text-gray-600 mb-4">
                Elegant rooms with premium amenities and breathtaking scenery.
              </p>
              <button
                onClick={() => openModal('Important news about Superior Suite: Limited availability for this month!')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="king-suite.jpg" alt="King Suite" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">King Suite</h2>
              <p className="text-gray-600 mb-4">
                Luxurious rooms offering an unparalleled experience of comfort and beauty.
              </p>
              <button
                onClick={() => openModal('King Suite: Experience the best with a free breakfast for two!')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              >
                X
              </button>
              <h2 className="text-3xl font-bold text-blue-800 mb-4">Important News</h2>
              <div className="space-y-4">
                <p className="text-gray-600">{modalContent}</p>
              </div>
              <div className="mt-6 text-center">
                <button
                  onClick={closeModal}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
