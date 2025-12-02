import React, { useState } from 'react';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fishOrderSave } from '../services/fishOrder';
import { useAuth } from '../context/authContext';


const CheckoutPage: React.FC = () => {

  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const product = state || {
    fishName: "Unknown Fish",
    price: "0",
    qty: 1,
    image: ""
  };

  // Parse price to ensure it's a number with fallback
  const parsePrice = (price: any): number => {
    try {
      if (typeof price === 'number') {
        return isNaN(price) ? 0 : price;
      }
      if (typeof price === 'string') {
        const cleanPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
        return isNaN(cleanPrice) ? 0 : cleanPrice;
      }
      return 0;
    } catch {
      return 0;
    }
  };

  const validPrice = parsePrice(product.price);
  const validQty = parseInt(String(product.qty)) || 1;

  // Form State
  const [formData, setFormData] = useState({
    email: user?.email || '',
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    address: '',
    apartment: '',
    qty: '',
    orderType: '',
    paymentMethod: '',
    orderDate: new Date().toISOString().split('T')[0],
    amount: 0
  });

  // Calculate current qty and subtotal based on form data
  const currentQty = formData.qty ? parseInt(formData.qty) : validQty;
  const subtotal = validPrice > 0 ? validPrice * currentQty : 0;

  // Update amount in formData when subtotal changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, amount: subtotal }));
  }, [subtotal]);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = async () => {
    if (!formData.email || !formData.firstname || !formData.lastname || !formData.address) {
      setAlert({ type: 'error', message: 'Please fill all required fields' });
      return;
    }

    try {
      setLoading(true);
      const orderData = {
        email: formData.email,
        firstname: formData.firstname,
        lastname: formData.lastname,
        address: formData.address,
        paymentmethod: formData.paymentMethod,
        amount: subtotal.toString(),
        orderType: formData.orderType,
        orderDate: formData.orderDate,
        fishname: product.fishName,
        price: validPrice.toString(),
        qty: currentQty
      };

      await fishOrderSave(orderData);
      setAlert({ type: 'success', message: 'Order placed successfully!' });
    
    } catch (error: any) {
      setAlert({ type: 'error', message: error.response?.data?.message || 'Failed to place order' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row mt-10">
      
      {/* LEFT SIDE - Form Section */}
      <div className="w-full lg:w-[58%] px-4 py-8 lg:px-16 lg:py-12 order-2 lg:order-1 border-r border-gray-200">
        <div className="max-w-xl mx-auto">
          {/* Header / Logo Area */}
          <h1 className="text-2xl font-bold mb-6 text-black">Your Fish Shop</h1>
          
          {/* Contact Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Contact</h2>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email "
              className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Delivery Section */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Fill the Orders</h2>

            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                className="w-full md:w-1/2 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.firstname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                className="w-full md:w-1/2 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </div>

            {/* Address Fields */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full border border-gray-300 rounded p-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.address}
              onChange={handleInputChange}
            />

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="number"
                name="qty"
                placeholder="Qty"
                className="w-full md:w-1/3 border border-gray-300 rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.qty}
                onChange={handleInputChange}
              />
              <div className="w-full md:w-1/3 relative">
                 <select 
                    name="orderType"
                    className="w-full border border-gray-300 rounded p-3 appearance-none bg-white text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.orderType}
                    onChange={handleInputChange}
                 >
                    <option value="Dilivery">Dilivery</option>
                    <option value="Take Away">Take Away</option>
                 </select>
                 <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

           {/* Payment Method Section (Added based on request) */}
           <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <div className="border border-gray-300 rounded overflow-hidden">
                <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
                    <input 
                        type="radio" 
                        id="card" 
                        name="paymentMethod" 
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="card" className="font-medium flex-1 cursor-pointer">Credit / Debit Card</label>
                </div>
                <div className="flex items-center p-4">
                    <input 
                        type="radio" 
                        id="cod" 
                        name="paymentMethod" 
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleInputChange}
                        className="mr-3 h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="cod" className="font-medium flex-1 cursor-pointer">Cash on Delivery</label>
                </div>
            </div>
           </div>

           {/* Pay Button & Footer */}
           <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-8 gap-4">
               <button 
                 className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                 onClick={() => navigate(-1)}
               >
                   <ChevronLeft className="h-4 w-4 mr-1" /> Back
               </button>
               <button 
                 onClick={handleOrderSubmit}
                 disabled={loading}
                 className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-medium transition disabled:opacity-50"
               >
                 {loading ? 'Processing...' : 'Order Now'}
               </button>
           </div>

           {/* Alert */}
           {alert && (
             <div className={`mt-4 p-3 rounded ${alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
               {alert.message}
             </div>
           )}
        </div>
      </div>

      {/* RIGHT SIDE - Order Summary */}
      <div className="w-full lg:w-[42%] bg-white border-l border-gray-200 px-4 py-8 lg:px-12 lg:py-12 order-1 mt-15 lg:order-2">
        <div className="max-w-md mx-auto lg:mx-0  lg:top-12">
            
            {/* Product Item */}
            <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                    <div className="w-36 h-36 border border-gray-200 rounded-lg overflow-hidden bg-white">
                        <img src={product.image} alt={product.fishName} className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs font-medium h-5 w-5 flex items-center justify-center rounded-full">
                        {currentQty}
                    </span>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-medium text-gray-800">{product.fishName}</h3>
                    <p className="text-xs text-gray-500">{currentQty} Fish</p>
                </div>
                <p className="text-sm font-medium text-gray-800">Rs {isNaN(validPrice) ? '0' : validPrice}</p>
            </div>

            <hr className="border-gray-200 my-6" />

            {/* Total */}
            <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">Rs {isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mt-4">
                <span>Total</span>
                <span className="text-xl font-semibold">Rs. {isNaN(subtotal) ? '0.00' : subtotal.toFixed(2)}</span>
            </div>

            <div className="mt-6 text-sm text-gray-600 p-4 bg-gray-100 rounded">
                <p>Order Date: {formData.orderDate}</p>
                <p>Order Type: {formData.orderType}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;