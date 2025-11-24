import { useEffect, useState } from "react";
import { getAllFish } from "../services/Fish";
import { ShoppingCart } from "lucide-react";

interface Fish {
  _id: string;
  fishName: string;
  price: string;
  description: string;
  fishCategory: string;
  imageUrl: string;
}

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
  const [fishList, setFishList] = useState<Fish[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const loadData = async () => {
      const res = await getAllFish(page, limit);
      setFishList(res.data);
      setTotalPages(res.totalPages);
  };

  useEffect(() => {
     loadData();
  }, [page]);
  

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
        <div className="flex flex-wrap justify-center gap-3 mb-20">
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


      <div className="mt-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fishList.map((fish) => (
          <div
            key={fish._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="h-70 w-full overflow-hidden">
              <img
                src={fish.imageUrl}
                alt={fish.fishName}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-semibold text-sky-800">
                  {fish.fishName}
                </h3>
                <span className="bg-blue-100 text-blue-700 px-3 font-bold py-2 rounded-2xl text-sm whitespace-nowrap">
                  {fish.fishCategory}
                </span>
              </div>

              <h4 className="text-md text- font-semibold mb-3 text-sky-800">
                  Pair of Fish : {fish.price}
              </h4>
              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                {fish.description}
              </p>

              

              <button className="flex items-center justify-center gap-2 mt-3 cursor-pointer bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-full w-full transition-all duration-300">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        <span className="font-medium text-lg">{page} / {totalPages}</span>

        <button
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>


  </section>
  );
}
