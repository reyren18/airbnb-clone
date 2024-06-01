import React, { useState } from 'react';
import close from "../assets/close.png"
const Signup = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button 
        onClick={toggleModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Toggle modal
      </button>

      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          role="dialog"
          aria-modal="true" // indicates that this is a modal
        >
          <div className="bg-white rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center border-b p-5">
              <h3 className="text-lg font-medium text-gray-900">
                Register with us!
              </h3>
              <button 
                type="button"
                onClick={toggleModal}
              >
                <img src={close} className='w-5 h-5'/>
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Welcome to Not Airbnb
              </h2>

              <form>
                <div className="mb-4">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="mt-1 block w-full p-2 border border-gray-400" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label  
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="mt-1 block w-full p-2 border border-gray-400" 
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full text-white bg-pink-400 hover:bg-pink-500 rounded-lg text-sm p-3 text-center"
                >
                   Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
