import React, { useState } from "react";
import "animate.css"; // Make sure to import Animate.css

const Arrangement = () => {
  const [modalOpen, setModalOpen] = useState(null);

  const closeModal = () => setModalOpen(null);

  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-photo/blue-suitcase-tourism-traveler-concept-with-blue-background_44722-129.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid')`,
      }}
    >
      <h1 className="text-4xl font-extrabold text-center text-white mb-6">
        Welcome to Minerva
      </h1>
      <p className="text-lg text-gray-200 text-center mb-12">
        Your go-to destination for design and innovation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Who We Are</h2>
            <p className="text-sm mb-4">
              Explore our vision and the people behind our journey.
            </p>
            <img
              src="https://img.freepik.com/free-vector/live-collaboration-concept-illustration_114360-663.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid"
              alt="Team"
              className="mx-auto rounded-full mb-4"
            />
            <button
              className="bg-white text-green-700 px-4 py-2 rounded-full"
              onClick={() => setModalOpen("modal1")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Our Services</h2>
            <p className="text-sm mb-4">
              Discover our innovative solutions tailored to your needs.
            </p>
            <img
              src="https://img.freepik.com/free-vector/waterfall-method-concept-illustration_114360-9829.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid"
              alt="Service"
              className="mx-auto rounded-full mb-4"
            />
            <button
              className="bg-white text-orange-700 px-4 py-2 rounded-full"
              onClick={() => setModalOpen("modal2")}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
            <p className="text-sm mb-4">
              Reach out to us with your ideas and questions.
            </p>
            <img
              src="https://img.freepik.com/premium-photo/smiling-looking-friendly-showing-number-five-fifth-with-hand-forward-counting-down_1194-77324.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid"
              alt="Contact"
              className="mx-auto rounded-full mb-4"
            />
            <button
              className="bg-white text-blue-700 px-4 py-2 rounded-full"
              onClick={() => setModalOpen("modal3")}
            >
              Say Hello
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {modalOpen === "modal1" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
            <h2 className="text-green-600 text-3xl font-bold mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              We are a team of passionate individuals dedicated to creating
              exceptional experiences. Our mission is to innovate and inspire.
            </p>
            <img
              src="https://img.freepik.com/free-photo/young-lady-t-shirt-jacket-showing-palm-looking-happy-front-view_176474-85589.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid"
              alt="Team"
              className="mb-4 w-full rounded-lg"
            />
            <a
              href="#"
              className="text-green-600 underline text-sm block mb-4"
            >
              Learn more about our values
            </a>
            <button
              className="absolute top-4 right-4 text-red-600 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {modalOpen === "modal2" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
            <h2 className="text-orange-600 text-3xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 mb-4">
              We provide a variety of design and development solutions to meet
              your business needs. Let's bring your vision to life.
            </p>
            <img
              src="https://img.freepik.com/premium-photo/young-caucasian-woman-smiling-cheerful-showing-number-five-with-fingers_1187-106774.jpg?uid=R110381763&ga=GA1.1.405801952.1728201124&semt=ais_hybrid"
              alt="Services"
              className="mb-4 w-full rounded-lg"
            />
            <a
              href="#"
              className="text-orange-600 underline text-sm block mb-4"
            >
              Explore our services
            </a>
            <button
              className="absolute top-4 right-4 text-red-600 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {modalOpen === "modal3" && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate__animated animate__fadeIn">
          <div className="bg-white p-8 rounded-lg shadow-lg relative max-w-lg w-full">
            <h2 className="text-blue-600 text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              Got questions? We’re here to help! Send us a message and let’s
              start the conversation.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Send Message
              </button>
            </form>
            <button
              className="absolute top-4 right-4 text-red-600 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arrangement;
