import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import {getAllSamartAquariumDetails } from "../services/customizedAquarium";

interface Aquarium{
  _id: string;
  customername: string;
  phonenumber: string;
  email: string;
  address: string;
  width : string
  height : string 
  length : string 
  material : string
  extrafeatures : string
  notes : string
  imageUrl : string
}

interface AquariumCardGridHandle {
  refreshData: () => void;
}

const UserCardGrid = forwardRef<AquariumCardGridHandle>((_, ref) => {
  const [aquariumList, setAquariumList] = useState<Aquarium[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9;

  const loadData = async () => {
    try {
      const res = await getAllSamartAquariumDetails(page, limit);
      setAquariumList(res.data);
      setTotalPages(res.totalPages);
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  };

  useImperativeHandle(ref, () => ({
    refreshData: () => loadData(),
  }));

  useEffect(() => {
    loadData();
  }, [page]);

  return (
  <div className="mt-10">
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Customized Aquarium Management</h2>
        <p className="text-gray-600 mt-2">Track and manage all customer customized Aquarium Management</p>
      </div>
    </div>
      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aquariumList.map((aquarium) => (
          <div
            key={aquarium._id}
            className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{aquarium.customername} {aquarium.phonenumber}</h3>
            <p className="text-gray-600">{aquarium.email}</p>
            <p className="mt-2 inline-block  text-gray-700 ">
              {aquarium.address}
            </p>
            <p className="text-gray-600">{aquarium.width}</p>
            <p className="text-gray-600">{aquarium.height}</p>
            <p className="text-gray-600">{aquarium.length}</p>
            <p className="text-gray-600">{aquarium.material}</p>
            <p className="text-gray-600">{aquarium.extrafeatures}</p>
              <img
              src={aquarium.imageUrl}
              className="w-full h-48 object-cover rounded-md"
              
            />

            <p className="text-gray-600">{aquarium.notes}</p>

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
});

UserCardGrid.displayName = "UserCardGrid";

export default UserCardGrid;
