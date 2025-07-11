import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/auth/admin/Sidebar'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { adminToken, apiUrl } from '../../components/Http';
import Loader from '../../components/common/loader/Loader';
import RecordNotFound from '../../components/common/RecordNotFound';

function ShowCategory() {
   // categories state declaration
   const [categories, setCategories] = useState([]); 
   const [loading, setLoading] = useState(true);
   // fetch categories from the API

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
      console.log("result is", result);
      setCategories(result.categories); 
      setLoading(false);
  
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    setTimeout(()=>{
      fetchCategories();
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
            <div className="max-w-6xl mx-auto  p-4 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Category List</h2>
                  <Link to="/admin/categories/create" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    <i className="fa-solid fa-plus mr-2"></i> Add Category
                  </Link>
                </div>
                  <div className="overflow-x-auto">
                  <table className="min-w-full text-center text-sm text-gray-700">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                        <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        loading ? (
                          <tr>
                            <td colSpan={4}>
                              <div className="flex justify-center items-center h-32">
                                <Loader /> 
                              </div>
                            </td>
                          </tr>
                        ) : categories.length === 0 ? (
                          <tr>
                            <td colSpan={4}>
                              <div className="flex justify-center items-center h-32 text-gray-600 font-semibold">
                                <RecordNotFound recordTitle="Category Not Found" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          categories.map((category, index) => (
                            <tr key={category.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">{index + 1}</td>
                              <td className="px-6 py-4">{category.name}</td>
                              <td className="px-6 py-4">
                                <span
                                  className={`inline-block ${
                                    category.status === 1 ? 'bg-green-600' : 'bg-red-600'
                                  } text-white text-xs font-semibold px-2.5 py-0.5 rounded`}
                                >
                                  {category.status === 1 ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                              <td className="px-6 py-4 space-x-2">
                                <button className="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
                                  <FaRegEdit />
                                </button>
                                <button className="inline-flex items-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition">
                                  <MdDelete />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>

                  </table>
                </div>
            </div>

          </main>
          </div>
        </div>
  )
}

export default ShowCategory
