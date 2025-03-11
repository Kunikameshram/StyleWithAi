import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className=" w-full bg-gray-100 shadow-lg rounded-lg p-8 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <div className="w-full lg:w-1/3">
          <img 
            src="/images/maleModel.png" 
            alt="Male Model" 
            className="w-full rounded-lg"
          />
        </div>

        {/* Contact Form Section */}
        <div className="w-full lg:w-1/3 p-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Be In Touch With Us</h2>
          <p className="text-gray-600 mb-4">
            The customer is very important, the customer will be followed by the customer.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-3 rounded-md w-full" required />
              <input type="text" placeholder="Last Name" className="border p-3 rounded-md w-full" required />
            </div>
            <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" required />
            <textarea placeholder="Message" className="border p-3 rounded-md w-full h-24" required></textarea>
            <button type="submit" className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-800">
              Send Us an Email
            </button>
          </form>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3">
          <img 
            src="/images/femaleModel.png" 
            alt="Female Model" 
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500">
        <p>Copyright © 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
