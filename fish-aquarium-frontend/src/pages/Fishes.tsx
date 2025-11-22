import { useState } from "react";

export default function FishCategorySection() {
  const categories = [
    { label: "All",value: "all" },
    { label: "Carp", value: "carp" },
    { label: "Barb", value: "barb" },
    { label: "Gouramies", value: "gouramies" },
    { label: "Tetra", value: "tetra" },
    { label: "Predatory Fish", value: "predatory" },
  ];

  const [selected, setSelected] = useState("all");

  return (
    <section className="py-12 px-6 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-sky-800 text-center mb-3">
          Fish Categories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover our smart aquarium solutions from intelligent fish care
          systems to automated tank management tools that make your aquarium
          experience easier and more enjoyable.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-23">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`px-5 py-2 rounded-full font-semibold shadow-sm transition-all ${
                selected === cat.value
                  ? "bg-sky-600 text-white shadow-lg scale-105"
                  : "bg-white text-sky-800 border border-sky-400 hover:bg-sky-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
