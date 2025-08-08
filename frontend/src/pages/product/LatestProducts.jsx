import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiUrl } from '../../components/Http';
import Loader from '../../components/common/loader/Loader';

export default function LatestProducts() {
    // get latest products,category and brand from the API
    const [latestProducts, setLatestProducts] = useState([]);
    const [getCategory, setCategory] = useState([]);
    const [getBrand, setBrand] = useState([]);
    const [loading, setLoading] = useState(true);
    // Fetch latest product data from the API
    const getLatestProduct = async () => {
        try {
          const response = await fetch(`${apiUrl}/get-latest-product`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
  
          const result = await response.json(); 
            setLatestProducts(result.data);
            setLoading(false);   
        } catch (error) {
          console.error("Error fetching latest product:", error);
        }
    };
    // Fetch all category data from the API
    const getCategories = async () => {
        try {
          const response = await fetch(`${apiUrl}/get-categories`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
  
          const result = await response.json(); 
            setCategory(result.data);
            setLoading(false);   
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
    };
     // Fetch all category data from the API
     const getBrands = async () => {
        try {
          const response = await fetch(`${apiUrl}/get-brands`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          });
  
          const result = await response.json(); 
            setBrand(result.data);
            setLoading(false);   
        } catch (error) {
          console.error("Error fetching brands:", error);
        }
    };
    // Call the function to fetch latest products when the component mounts
    // useEffect hook to fetch latest products when the component mounts
    useEffect(() => {
        setTimeout(() => {
            getLatestProduct();
            getCategories();
            getBrands();
        },1000);
    }, []);
 
  return (
    <>
    <section  className="bg-gray-200 mt-5">
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4 p-4">
                {/* sidebar */}
                <div className="col-span-1 bg-white p-4 rounded">
                    <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200  shadow-lg overflow-hidden ">
                        <div>
                            <h1 className='font-bold text-3xl'>Categories</h1>
                            <div className='p-1'>
                                {
                                    loading ?
                                    <Loader/>
                                    :
                                    getCategory && getCategory.map((category) => (
                                        <div key={category.id}>
                                            <input type="checkbox" name={category.name} />  
                                            <label> {category.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                         </div>
                        <div className=" mt-4 max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200  shadow-lg overflow-hidden ">
                            <div>
                                <h1 className='font-bold text-3xl'>Brands</h1>
                                <div className='p-1'>
                                {
                                    loading ?
                                    <Loader/>
                                    :
                                    getBrand && getBrand.map((brand) => (
                                        <div key={brand.id}>
                                            <input type="checkbox" name={brand.name} />  
                                            <label> {brand.name}</label>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 bg-green-100 p-4 rounded">
                    <h2 className="text-3xl md:text-4xl font-bold underline mb-4">Latest Product</h2>
                    <div className='grid grid-1 grid-cols-3 gap-4'>
                    {
                        loading ?
                        <Loader/>
                        :
                        latestProducts && latestProducts.map((latestProduct) => (
                            <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-black  rounded-2xl shadow-2xl overflow-hidden transition transform hover:scale-105 duration-300" key={latestProduct.id}>
                                <div className="relative">
                                    <img className="w-full h-64 object-fit" src={latestProduct?.image_url} alt="Product image"/>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800">{latestProduct?.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                    {latestProduct?.short_description .slice(0, 100)}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {      
                                            latestProduct?.discount_price && 
                                            <span className="text-lg font-semibold text-gray-800">${latestProduct?.discount_price}</span>
                                        }
                                            <span className="text-sm line-through text-gray-400">${latestProduct?.price}</span>
                                    </div>
                                    <Link to="/productDetails"> 
                                    <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </Link> 
                                    </div>
                                </div>
                            </div>
                        ))
                      }
                    </div>
                </div>
            </div>
        </div>
    </section>
    
     </>
  )
}
