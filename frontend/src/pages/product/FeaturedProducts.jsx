import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { apiUrl } from '../../components/Http';
import Loader from '../../components/common/loader/Loader';

export default function FeaturedProducts() {
    // get latest products from the API
        const [featuredProducts, setFeaturedProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        // Fetch latest product data from the API
        const getFeaturedProduct = async () => {
            try {
              const response = await fetch(`${apiUrl}/get-featured-product`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
              });
      
              const result = await response.json(); 
                setFeaturedProducts(result.data);
                setLoading(false);   
            } catch (error) {
              console.error("Error fetching latest product:", error);
            }
        };
        // Call the function to fetch latest products when the component mounts
        // useEffect hook to fetch latest products when the component mounts
        useEffect(() => {
            setTimeout(() => {
                getFeaturedProduct();
            },1000);
        }, []);
     
  return (
    <>
    <section  className="bg-gray-200">
        <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-4 p-4">
                {/* sidebar */}
                <div className="col-span-1 bg-white p-4 rounded">
                   <h1>Coming Soon</h1>
                </div>
                <div className="col-span-3 bg-green-100 p-4 rounded">
                    <h2 className="text-3xl md:text-4xl font-bold underline mb-4">Featured Products</h2>
                    <div className='grid grid-1 grid-cols-3 gap-4'>
                    {
                        loading ?
                        <Loader/>
                        :
                        featuredProducts && featuredProducts.map((featuredProduct) => (
                            <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-black  rounded-2xl shadow-2xl overflow-hidden transition transform hover:scale-105 duration-300" key={featuredProduct?.id}>
                                <div className="relative">
                                    <img className="w-full h-80 object-fit" src={featuredProduct?.image_url} alt="Product image"/>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800">{featuredProduct?.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                    {featuredProduct?.short_description .slice(0, 100)}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        {      
                                            featuredProduct?.discount_price && 
                                            <span className="text-lg font-semibold text-gray-800">${featuredProduct?.discount_price}</span>
                                        }
                                            <span className="text-sm line-through text-gray-400">${featuredProduct?.price}</span>
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
