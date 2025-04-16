import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductDetails() {
  const images = [
    "https://i.ibb.co.com/5hntPphG/banana1.jpg",
    "https://i.ibb.co.com/tpG5BrjK/guava1.jpg",
    "https://i.ibb.co.com/KxRkzz5v/lemon1.jpg",
    "https://i.ibb.co.com/YzMvb5y/papaya1.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      {/* Left: Image Gallery */}
      <div>
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-[400px] rounded-xl transition-all duration-300"
        />
        <div className="flex gap-3 mt-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 rounded-lg border cursor-pointer ${
                mainImage === img ? "border-blue-500" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Awesome Product</h2>

          {/* Reviews */}
          <div className="flex items-center text-yellow-500 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <Star size={18} className="text-gray-300" />
            <span className="ml-2 text-sm text-gray-600">(123 reviews)</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            A short and snappy product description that gets to the point and sells the key features.
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Size</label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium ${
                    selectedSize === size
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-700 hover:border-blue-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-4 text-sm font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1.5 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow hover:bg-blue-700 transition-all">
          <ShoppingCart className="mr-2" size={18} />
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
}
