import { useEffect, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { apiUrl } from "../../components/Http";

export default function Product() {


  const [mainImage, setMainImage] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [rating,setRating] = useState(4);
  const [user,setUser] = useState("Makbul Hosen");
  const [product, setProduct] = useState([]);
  const [productImages,setProductImages] = useState([]); 
  const {id} = useParams();


  const getProduct = async () => {
          try {
            const response = await fetch(`${apiUrl}/get-product/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            });
            const result = await response.json(); 
              setProduct(result.data);
              setProductImages(result.data.product_images);
              setMainImage(result.data.image_url);
              setProductSizes(result.data.product_sizes);
            
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
      };
      useEffect(() => {
        getProduct();
      }
      , []);
  return (
    <>
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      {/* Left: Image Gallery */}
      <div>
        <img
          src={mainImage}
          alt="Product"
          className="w-full h-[400px] rounded-xl transition-all duration-300"
        />
        <div className="flex gap-3 mt-4">
          {productImages && productImages.map((img, i) => (
            <img
              key={i}
              src={img? img.image_url : "Image Not Found"}
              alt={`Thumbnail ${i}`}
              onClick={() => setMainImage(img.image_url)}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{product?.title}</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-2"> ${product?.price} <span className="line-through"> ${product?.discount_price && product?.discount_price}</span></h2>
          {/* Description */}
          <p className="text-gray-600 mb-6">
             {product?.short_description?.slice(0, 100)}
          </p>
          <p className="text-gray-600 mb-6">
             sku: {product?.sku}
          </p>

          {/* Size Selector */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Size</label>
              <div className="flex gap-2">
               {
                  productSizes.length > 0 ? (
                  productSizes.map((productSize) => (
                    <button
                      key={productSize.id}
                      onClick={() => setSelectedSize(productSize.id)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium mr-2 ${
                        selectedSize === productSize.id
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 text-gray-700 hover:border-blue-400"
                      }`}
                    >
                      {productSize.size.size}
                        </button>
                      ))
                    ) : (
                      <p>No sizes available</p>
                    )}
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
        <Link to="/cart">
        <button className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl shadow hover:bg-blue-700 transition-all">
          <ShoppingCart className="mr-2" size={18} />
          Add {quantity} to Cart
        </button>
        </Link>
      </div>
    </div>
      {/* Reviews and Ratings */}
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 my-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 underline">Reviews and Ratings</h2>
        <div className="flex items-center gap-1">
        <FaRegUser/>
        <p className="font-bold">{user}</p>
        </div>
      <div className="flex items-center text-yellow-500 mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star readonly key={i} size={18} fill="currentColor" />
            ))}
            <Star size={18} className="text-gray-300" />
            <span className="ml-2 text-sm text-gray-600">(123 reviews)</span>
          </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nam labore fugit voluptatibus nisi odit libero provident commodi! Quod, sequi?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nam labore fugit voluptatibus nisi odit libero provident commodi! Quod, sequi?</p>
    </div>
    </>
  );
}
