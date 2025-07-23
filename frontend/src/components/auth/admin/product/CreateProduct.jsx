import React, { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { adminToken, apiUrl } from '../../../Http';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function CreateProduct() {
  // category and brand state
   const [categories, setCategories] = useState([]);
   console.log( "all cat:-",categories);
   const [brands, setBrands] = useState([]);
   const [disable, setDisable] = useState(false); 

      const navigate = useNavigate();
      // form handling by useForm hook
      const {
      register,
      handleSubmit,
      formState: { errors },
        } = useForm();

      // save product function
      const saveProduct = async(data) => {
    setDisable(true);
    
      try {
          const response = await fetch(`${apiUrl}/products`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${adminToken()}`,
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          setDisable(false);
          if (result.status === 200) {
            toast.success(result.message);
            // Redirect to the products list page
            navigate('/admin/products');
          } else {
            console.log("something went wrong");
            toast.error(result.message);
          }
      
        } catch (error) {
          console.error("Error fetching products:", error);
        }
        };
       //category fetch function
      const fetchCategories = async () => {
        try {
          const response = await fetch(`${apiUrl}/categories`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${adminToken()}`,
            },
          });
          const result = await response.json();
          setCategories(result.data); 
        } catch (error) {
          console.error("Error fetching categories:", error);
          return [];
        }
      };
      //brand fetch function
      const fetchBrands = async () => {
        try {
          const response = await fetch(`${apiUrl}/brands`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${adminToken()}`,
            },
          });
          const result = await response.json();
          setBrands(result.data); 
        } catch (error) {
          console.error("Error fetching brands:", error);
          return [];
        }
      };

      // useEffect to fetch categories on component mount
      useEffect(() => {
        setTimeout(()=>{
          saveProduct();
          fetchCategories();
          fetchBrands();
        },1000)
      }, []);
  
 
   
  return (
    
     <div className="bg-gray-100 font-sans">
          <div className="min-h-screen flex">
          <Sidebar/>
          {/* <!-- Main Content --> */}
          <main className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
            {/* <!-- Cards --> */}
            <div className="max-w-6xl mx-auto p-4 bg-white shadow-lg rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Create Product</h2>
                <Link
                  to="/admin/products"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  <i className="fa-solid fa-list mr-2"></i> Product List
                </Link>
              </div>

              <div className="bg-gray-100 flex items-center justify-center p-6 rounded-lg">
                <form
                  onSubmit={handleSubmit(saveProduct)}
                  className="bg-white p-8 rounded-2xl shadow-md w-full max-w-2xl space-y-6"
                >
                  {/* Product Title */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Product Name</label>
                    <input
                      {...register("title", {
                        required: "The product name is required",
                      })}
                      type="text"
                      className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.title && "border-red-500"
                      }`}
                      placeholder="Enter Product Name"
                    />
                    {errors.title && (
                      <span className="text-red-500 text-sm">{errors.title.message}</span>
                    )}
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Price</label>
                    <input
                      {...register("price", {
                        required: "The price is required",
                      })}
                      type="number"
                      className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.price && "border-red-500"
                      }`}
                      placeholder="Enter Price"
                    />
                    {errors.price && (
                      <span className="text-red-500 text-sm">{errors.price.message}</span>
                    )}
                  </div>

                  {/* Category & Brand (Side by Side) */}
                  <div className="flex gap-6">
                    {/* Category */}
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-medium mb-1">Category</label>
                      <select
                        {...register("category", {
                          required: "The category is required",
                        })}
                        className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.category && "border-red-500"
                        }`}
                      >
                        <option value="">Select Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="health">Health</option>
                      </select>
                      {errors.category && (
                        <span className="text-red-500 text-sm">{errors.category.message}</span>
                      )}
                    </div>

                    {/* Brand */}
                    <div className="w-1/2">
                      <label className="block text-gray-700 font-medium mb-1">Brand</label>
                      <select
                        {...register("brand", {
                          required: "The brand is required",
                        })}
                        className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.brand && "border-red-500"
                        }`}
                      >
                        <option value="">Select Brand</option>
                        <option value="apple">Apple</option>
                        <option value="samsung">Samsung</option>
                        <option value="nike">Nike</option>
                      </select>
                      {errors.brand && (
                        <span className="text-red-500 text-sm">{errors.brand.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Description</label>
                    <textarea
                      {...register("description", {
                        required: "The description is required",
                      })}
                      rows="4"
                      className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.description && "border-red-500"
                      }`}
                      placeholder="Enter product description"
                    ></textarea>
                    {errors.description && (
                      <span className="text-red-500 text-sm">{errors.description.message}</span>
                    )}
                  </div>

                  {/* Status */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">Status</label>
                    <select
                      {...register("status", {
                        required: "The status field is required",
                      })}
                      className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.status && "border-red-500"
                      }`}
                    >
                      <option value="" disabled selected>
                        Select Status
                      </option>
                      <option value="1">Active</option>
                      <option value="0">Inactive</option>
                    </select>
                    {errors.status && (
                      <span className="text-red-500 text-sm">{errors.status.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={disable}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </main>
          </div>
        </div>
  )
}

export default CreateProduct
