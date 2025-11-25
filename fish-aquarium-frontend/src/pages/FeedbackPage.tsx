import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedbackForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white  p-10 rounded-2xl ">
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-sky-800 text-center">Share Your Experience</h1>
        <p className="text-gray-600 text-center mt-5">
         Discover our smart aquarium solutions from intelligent fish care
          systems to automated tank management tools that make your aquarium
          experience easier and more enjoyable.
        </p>

        {/* Form */}
        <div className="mt-10">
          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold block mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
              />
            </div>
          </div>

          

          {/* Feedback */}
          <div className="mt-8">
            <label className="font-semibold block mb-2">Your Feedback</label>
            <textarea
              placeholder="Tell us what you loved about your experience..."
              maxLength={500}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full border p-3 rounded-lg h-30 focus:ring-2 focus:ring-sky-400 transition"
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">
              {feedback.length}/500 characters
            </p>
          </div>


            {/* Star Rating */}
          <div className="mt-8">
            <label className="font-semibold block mb-3">Rate Your Experience</label>

            <div className="flex gap-2 text-5xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer transition 
                  ${star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="mt-8">
            <button className="w-full bg-sky-600 text-white py-2 rounded-xl cursor-pointer text-lg font-semibold hover:bg-sky-800 transition">
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
