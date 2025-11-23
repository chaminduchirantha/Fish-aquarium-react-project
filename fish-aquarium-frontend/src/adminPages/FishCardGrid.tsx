import { useEffect, useState } from "react";
import { getAllFish } from "../services/Fish";

interface Fish {
  _id: string;
  fishName: string;
  price: string;
  description: string;
  fishCategory: string;
  imageUrl: string;
}

function FishCardGrid() {
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
    <div className="mt-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fishList.map((fish) => (
          <div
            key={fish._id}
            className="bg-white rounded-xl shadow-md p-4 border"
          >
            <img
              src={fish.imageUrl}
              className="w-full h-48 object-cover rounded-md"
              alt={fish.fishName}
            />

            <h3 className="text-lg font-semibold mt-3">{fish.fishName}</h3>
            <p className="text-gray-600 text-sm">{fish.description}</p>

            <div className="mt-3 flex justify-between text-sm">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {fish.fishCategory}
              </span>
              <span className="font-semibold text-green-700">{fish.price}</span>
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
  );
}

export default FishCardGrid;
