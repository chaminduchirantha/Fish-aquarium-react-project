import { useState, type ChangeEvent } from "react";
import image1 from "../assets/beautiful-group-fish-underwater.jpg";
import { ImagePlus, Loader2 } from "lucide-react";
import { createCustomizedAquarium } from "../services/customizedAquarium";

export default function CustomTankForm() {
  const [customername, setCustomerName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [length, setLength] = useState("");
  const [meterial, setMeterial] = useState("");
  const [extrafeatures, setExtraFeatures] = useState("");
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("customername", customername);
      formData.append("phonenumber", phonenumber);
      formData.append("email", email);
      formData.append("address", address);
      formData.append("width", width);
      formData.append("height", height);
      formData.append("length", length);
      formData.append("material", meterial);
      formData.append("extrafeatures", extrafeatures);
      formData.append("notes", notes);

      if (image) {
        formData.append("image", image);
      }

      await createCustomizedAquarium(formData);

      // Reset all fields
      setCustomerName("");
      setPhoneNumber("");
      setEmail("");
      setAddress("");
      setWidth("");
      setHeight("");
      setLength("");
      setMeterial("");
      setExtraFeatures("");
      setNotes("");
      setImage(null);
      setPreview("");
      alert("Custom Tank Request Submitted Successfully!");
    } catch (error) {
      console.error("Submit Failed", error);
      alert("Failed to submit. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-6 flex justify-center items-center mt-15">
      <div className="w-full max-w-7xl bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 border border-white/40">
        {/* LEFT IMAGE SECTION */}
        <div className="relative h-60 md:h-auto">
          <img src={image1} alt="Aquarium" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-sky-900/30"></div>
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="p-8">
          <h1 className="text-3xl font-bold text-sky-700 mb-12 text-center drop-shadow-sm">
            Custom Tank Request
          </h1>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Customer Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="Enter your name"
                  value={customername}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Phone Number</label>
                <input
                  type="text"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="07X XXX XXXX"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-sky-700 mb-1">Email</label>
                <input
                  type="email"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Address */}
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium text-sky-700 mb-1">Address</label>
                <input
                  type="text"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              {/* Width */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Width (cm)</label>
                <input
                  type="number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  required
                />
              </div>

              {/* Height */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Height (cm)</label>
                <input
                  type="number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>

              {/* Length */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Length (cm)</label>
                <input
                  type="number"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  placeholder="length"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  required
                />
              </div>

              {/* Material */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-sky-700 mb-1">Material</label>
                <select
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-sky-400 transition"
                  value={meterial}
                  onChange={(e) => setMeterial(e.target.value)}
                  required
                >
                  <option value="">Select Material</option>
                  <option value="Glass">Glass</option>
                  <option value="Acrylic">Acrylic</option>
                  <option value="Smart Tank">Smart Tank (Sensor + Auto Feeder)</option>
                </select>
              </div>
            </div>

            {/* Extra Features */}
            <label className="block text-sm font-medium text-sky-700 mt-5 mb-1">Extra Features</label>
            <textarea
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-sky-400 transition"
              placeholder="LED, Filter, Auto Feeder..."
              value={extrafeatures}
              onChange={(e) => setExtraFeatures(e.target.value)}
              rows={3}
            />

            {/* Notes */}
            <label className="block text-sm font-medium text-sky-700 mt-5 mb-1">Notes</label>
            <textarea
              className="border p-3 rounded-lg w-full focus:ring-2 focus:ring-sky-400 transition"
              placeholder="Any special instructions..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
            />

            {/* Image Upload */}
            <div className="flex flex-col items-center mt-6">
              <label className="flex flex-col items-center justify-center w-full border-2 border-dashed border-sky-300 rounded-xl cursor-pointer hover:bg-sky-50 transition p-6">
                <ImagePlus className="text-sky-500 mb-2" size={30} />
                <span className="text-sky-600 font-medium">{image ? image.name : "Upload Image"}</span>
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              </label>

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-56 object-cover mt-4 rounded-xl shadow-md"
                />
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 bg-sky-600 text-white w-full py-3 rounded-lg font-semibold hover:bg-sky-700 hover:shadow-xl transition shadow-md flex justify-center items-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" size={20} />}
              {loading ? "Saving..." : "Save Post"}
            </button>
          </form>
          {/* Form End */}
        </div>
      </div>
    </div>
  );
}
