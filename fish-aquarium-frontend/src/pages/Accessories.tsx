import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { getAllAccessories } from "../services/accessories";

interface Fish {
  _id: string;
  itemname: string;
  price: string;
  description: string;
  imageUrl: string;
}

export default function FishCategorySection() {


  const [fishList, setFishList] = useState<Fish[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const loadData = async () => {
      const res = await getAllAccessories(page, limit);
      setFishList(res.data);
      setTotalPages(res.totalPages);
  };

  useEffect(() => {
     loadData();
  }, [page]);
  

  return (
    <section className="py-12 px-8 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold text-sky-800 text-center mb-3">
          Accessories in Aquarium
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Discover our smart aquarium solutions from intelligent fish care
          systems to automated tank management tools that make your aquarium
          experience easier and more enjoyable.
        </p>
      </div>


      <div className="mt-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fishList.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="h-60 w-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.itemname}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-semibold text-sky-800">
                  {item.itemname}
                </h3>
              </div>

              <h4 className="text-md text- font-semibold mb-3 text-sky-800">
                  {item.price}
              </h4>
              <p className="text-gray-600 font-semibold text-sm leading-relaxed">
                {item.description}
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
      <div className="flex justify-center gap-4 mt-12">
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
