import React from 'react'
import { Link } from 'react-router-dom';

import slider1 from "../../assets/slider/banana1.jpg";
import slider2 from "../../assets/slider/lemon1.jpg";
import slider3 from "../../assets/slider/guava1.jpg";

export default function LatestProducts() {
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
                                
                                <div>
                                    <input type="checkbox" name="kids" />  
                                    <label> Kids</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="mens" />  
                                    <label> Mens</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="women" />  
                                    <label> Women</label>
                                </div>
                            </div>
                         </div>
                        <div className=" mt-4 max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200  shadow-lg overflow-hidden ">
                            <div>
                                <h1 className='font-bold text-3xl'>Brands</h1>
                                <div className='p-1'>
                                    
                                    <div>
                                        <input type="checkbox" name="zara" />  
                                        <label> Zara</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="nike" />  
                                        <label> Nike</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="adidas" />  
                                        <label> Adidas</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 bg-green-100 p-4 rounded">
                    <h2 className="text-3xl md:text-4xl font-bold underline mb-4">New Arrivals</h2>
                    <div className='grid grid-1 grid-cols-3 gap-4'>
                        <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-black  rounded-2xl shadow-2xl overflow-hidden transition transform hover:scale-105 duration-300">
                                <div className="relative">
                                    <img className="w-full h-64 object-fit" src={slider1} alt="Product image"/>
                                    <span className="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Off
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg font-semibold text-gray-800">$160</span>
                                        <span className="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                   <Link to="/productDetails"> 
                                   <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </Link> 
                                    </div>
                                </div>
                        </div>
                        <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-black rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
                                <div className="relative">
                                    <img className="w-full h-64 object-fit" src={slider2} alt="Product image"/>
                                    <span className="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Off
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg font-semibold text-gray-800">$160</span>
                                        <span className="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                    <Link to="/productDetails"> 
                                   <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </Link> 
                                    </div>
                                </div>
                        </div>
                        <div className=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-black rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
                                <div className="relative">
                                    <img className="w-full h-64 object-fit" src={slider3} alt="Product image"/>
                                    <span className="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Off
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-lg font-semibold text-gray-800">$160</span>
                                        <span className="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                    <Link to="/productDetails"> 
                                   <button className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </Link> 
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
     </>
  )
}
