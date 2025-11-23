import { useState } from 'react'

interface Accessory {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  supplier: string;
}

function AccessoriesAdmin() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Accessories Management</h2>
        <p className="text-gray-600 mt-2">Manage aquarium accessories inventory</p>
      </div>
    </div>
  )
}

export default AccessoriesAdmin