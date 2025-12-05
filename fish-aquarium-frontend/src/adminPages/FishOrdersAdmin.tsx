import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import { getAllFishOrder } from "../services/fishOrder";

interface User {
  _id: string;
  email :string
  firstname : string 
  lastname : string
  address : string
  paymentmethod : string
  amount : string
  orderType :string
  orderDate : string
  fishname : string
  price : string
  qty : number
}

interface UserCardGridHandle {
  refreshData: () => void;
}

const UserCardGrid = forwardRef<UserCardGridHandle>((_, ref) => {
  const [orderFishList, setOrderFishList] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 3;

  const loadData = async () => {
    try {
      const res = await getAllFishOrder(page, limit);
      setOrderFishList(res.data);
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
    <div className="mt-5">

      <div>
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Order Management</h2>
          <p className="text-gray-600 mt-2">Track and manage all customer orders</p>
        </div>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orderFishList.map((ordersFish) => (
          <div
            key={ordersFish._id}
            className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{ordersFish.firstname} {ordersFish.lastname}</h3>
            <p className="text-gray-600">Customer Email : {ordersFish.email}</p>
            <p className="text-gray-600 font-bold">Address : {ordersFish.address}</p>
            <p className="text-gray-600">Payment Method : {ordersFish.paymentmethod}</p>
            <p className="text-gray-600">Order Date : {ordersFish.orderDate}</p>
            <p className="text-gray-600">Order Type : {ordersFish.orderType}</p>
            <p className="text-gray-600 font-bold">Fish Name : {ordersFish.fishname}</p>
            <p className="text-gray-600">Price Rs : {ordersFish.price}.00/=</p>
            <p className="text-gray-600">Qty of fish : {ordersFish.qty}</p>
            <p className="text-gray-600 font-bold">Amount Rs : {ordersFish.amount}.00/=</p>
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
