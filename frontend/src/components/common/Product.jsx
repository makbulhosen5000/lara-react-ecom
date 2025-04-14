import React from 'react'
import { FaCode, FaCodepen, FaDatabase, FaTools } from 'react-icons/fa'

import slider1 from "../../assets/slider/banana1.jpg";
import slider2 from "../../assets/slider/lemon1.jpg";
import slider3 from "../../assets/slider/papaya1.jpg";
import slider4 from "../../assets/slider/coco1.jpg";

export default function Product() {
  return (
    <>
    <section  className="bg-gray-200 my-2">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold underline mt-3">Products</h2>

            <div class="grid grid-cols-4 gap-4 p-4">
                <div class="col-span-1 bg-white p-4 rounded">
                <div class=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200  shadow-lg overflow-hidden ">
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

                </div>
                <div class=" mt-4 max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200  shadow-lg overflow-hidden ">
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
                <div class="col-span-3 bg-green-100 p-4 rounded">
                    <div className='grid grid-1 grid-cols-3 gap-4'>
                        <div class=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
                                <div class="relative">
                                    <img class="w-full h-64 object-fit" src={slider2} alt="Product image"/>
                                    <span class="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Offer
                                    </span>
                                </div>
                                <div class="p-5">
                                    <h3 class="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p class="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-lg font-semibold text-gray-800">$160</span>
                                        <span class="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                    <button class="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </div>
                                </div>
                        </div>
                        <div class=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
                                <div class="relative">
                                    <img class="w-full h-64 object-fit" src={slider1} alt="Product image"/>
                                    <span class="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Offer
                                    </span>
                                </div>
                                <div class="p-5">
                                    <h3 class="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p class="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-lg font-semibold text-gray-800">$160</span>
                                        <span class="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                    <button class="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
                                    </div>
                                </div>
                        </div>
                        <div class=" max-w-sm mx-auto bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
                                <div class="relative">
                                    <img class="w-full h-64 object-fit" src={slider3} alt="Product image"/>
                                    <span class="absolute top-4 left-4 bg-yellow-300 text-black text-xs font-semibold px-2 py-1 rounded-full shadow">
                                    20% Offer
                                    </span>
                                </div>
                                <div class="p-5">
                                    <h3 class="text-lg font-bold text-gray-800">Luxury Leather Bag</h3>
                                    <p class="text-sm text-gray-600 mt-1">
                                    Crafted with premium leather, designed for elegance and functionality.
                                    </p>
                                    <div class="mt-4 flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-lg font-semibold text-gray-800">$160</span>
                                        <span class="text-sm line-through text-gray-400">$200</span>
                                    </div>
                                    <button class="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-200">
                                        Buy Now
                                    </button>
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
