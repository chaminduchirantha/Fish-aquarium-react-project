import React from "react";
import { CreditCard, Calendar, User, Lock, Phone, Mail } from "lucide-react";
import image from "../assets/pexels-shvetsa-4482900.jpg";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 mt-12">

      {/* TOP TITLE + DESCRIPTION */}
      <h1 className="text-5xl font-bold text-sky-800 text-center mt-4">
        Process your Payment
      </h1>

      <p className="text-gray-600 text-center mt-4 max-w-3xl">
        Discover our smart aquarium solutions, from intelligent fish care systems
        to automated tank management tools that make your aquarium experience
        easier and more enjoyable.
      </p>

      {/* PAYMENT CARD */}
      <div className="bg-white shadow-2xl rounded-2xl max-w-5xl w-full mt-10 grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE IMAGE */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Payment"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-6 md:p-10">

          {/* Card Logos */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              className="h-8"
              alt="Visa"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              className="h-8"
              alt="Mastercard"
            />
          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                <Mail className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                <Phone className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div>
              <label className="block font-medium mb-1">Cardholder Name</label>
              <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                <User className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Enter Cardholder Name "
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Card Number */}
            <div>
              <label className="block font-medium mb-1">Card Number</label>
              <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                <CreditCard className="w-5 h-5 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Expiry Date</label>
                <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium mb-1">CVV</label>
                <div className="flex items-center border rounded-xl p-3 bg-gray-50">
                  <Lock className="w-5 h-5 text-gray-500 mr-2" />
                  <input
                    type="password"
                    placeholder="123"
                    className="w-full bg-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <button
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl mt-3 transition"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
