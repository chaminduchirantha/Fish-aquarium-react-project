import React from "react";
import image1 from "../assets/21438.jpg"



export default function CustomTankForm() {
  return (
    <div className="min-h-screen p-6 flex justify-center items-center mt-15">
        

      <div className="w-full max-w-6xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white/40">

        {/* LEFT IMAGE SECTION */}
        <div className="relative h-80 md:h-auto">
          <img
            src={image1}
            alt="Aquarium"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-sky-900/30"></div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="p-8">

          <h1 className="text-3xl font-bold text-sky-700 mb-12 text-center drop-shadow-sm">
            Custom Tank Request
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col">
              <label className="text-sm font-medium text-sky-700 mb-1">Customer Name</label>
              <input
                type="text"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                placeholder="Enter your name"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-sky-700 mb-1">Phone Number</label>
              <input
                type="text"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                placeholder="07X XXX XXXX"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-sky-700 mb-1">Email</label>
              <input
                type="email"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                placeholder="example@gmail.com"
              />
            </div>

            
            <div className="flex flex-col md:col-span-2">
              <label className="text-sm font-medium text-sky-700 mb-1">Address</label>
              <input
                type="text"
                className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                placeholder="Enter Address"
              />
            </div>


            {["Width (cm)", "Height (cm)", "Length (cm)"].map((label) => (
              <div key={label} className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">{label}</label>
                <input
                  type="number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder={label}
                />
              </div>
            ))}

            {/* MATERIAL */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-sky-700 mb-1">Material</label>
              <select className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition">
                <option>Glass</option>
                <option>Acrylic</option>
                <option>Smart Tank (Sensor + Auto Feeder)</option>
              </select>
            </div>
          </div>

          {/* TEXTAREAS */}
          <label className="block text-sm font-medium text-sky-700 mt-5 mb-1">Extra Features</label>
          <textarea
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-sky-400 transition"
            placeholder="LED, Filter, Auto Feeder..."
            rows={3}
          />

          <label className="block text-sm font-medium text-sky-700 mt-5 mb-1">Notes</label>
          <textarea
            className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-sky-400 transition"
            placeholder="Any special instructions and sent you are like video link ...."
            rows={3}
          />

          {/* IMAGE UPLOAD */}
          <div className="mt-6">
            <label className="font-semibold text-sky-700">Reference Image</label>
            <div className="mt-3 flex flex-col items-center border-2 border-dashed border-sky-400 bg-sky-50/50 p-6 rounded-xl hover:bg-sky-100 transition">
              <input type="file" accept="image/*" className="cursor-pointer text-sm" />
              <p className="text-xs text-gray-500 mt-2">Upload inspiration image (optional)</p>
            </div>
          </div>

          {/* SUBMIT */}
          <button className="mt-8 bg-sky-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-sky-700 hover:shadow-xl transition shadow-md">
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
}
