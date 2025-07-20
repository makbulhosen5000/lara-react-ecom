import React, { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { adminToken, apiUrl } from '../../../Http';
import Loader from '../../../common/loader/Loader';
import RecordNotFound from '../../../common/RecordNotFound';
import { toast } from 'react-toastify';

function Brand() {
   // brands state declaration
   const [brands, setBrands] = useState([]); 
   const [loading, setLoading] = useState(true);
     //pagination state declaration
     const [currentPage, setCurrentPage] = useState(1);
     const itemsPerPage = 5; 
     // Calculate pagination
     const indexOfLastItem = currentPage * itemsPerPage;
     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
     const currentItems = brands.slice(indexOfFirstItem, indexOfLastItem);
     const totalPages = Math.ceil(brands.length / itemsPerPage);
     const paginate = (pageNumber) => setCurrentPage(pageNumber);

   // fetch brands from the API
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
      setLoading(false);
  
    } catch (error) {
      console.error("Error fetching brands:", error);
    }
  };
  useEffect(() => {
    setTimeout(()=>{
      fetchBrands();
    },1000)
  }, []);

  // delete Brand function
  const deleteBrand = async (id) => {
    if (confirm("Are you sure you want to delete this Brand?")) {
      try {
        const response = await fetch(`${apiUrl}/brands/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${adminToken()}`,
          },
        });
  
        const result = await response.json();
        if (result.status === 200) {
          setBrands(brands.filter(brand => brand.id !== id));
          toast.success(result.message);
        } else {
          toast.error(result.message);
        }
  
      } catch (error) {
        console.error("Error deleting brand:", error);
      }
    }
     
  }

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
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Brand List</h2>
                  <Link to="/admin/brands/create" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    <i className="fa-solid fa-plus mr-2"></i> Add Brand
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
                        ) : brands.length === 0 ? (
                          <tr>
                            <td colSpan={4}>
                              <div className="flex justify-center items-center h-32 text-gray-600 font-semibold">
                                <RecordNotFound recordTitle="Brand Not Found" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          currentItems.map((brand, index) => (
                            <tr key={brand.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4">{indexOfFirstItem + index + 1}</td>
                              <td className="px-6 py-4">{brand.name}</td>
                              <td className="px-6 py-4">
                                <span
                                  className={`inline-block ${
                                    brand.status === 1 ? 'bg-green-600' : 'bg-red-600'
                                  } text-white text-xs font-semibold px-2.5 py-0.5 rounded`}
                                >
                                  {brand.status === 1 ? 'Active' : 'Inactive'}
                                </span>
                              </td>
                              <td className="px-6 py-4 space-x-2">
                                <Link to={`/admin/brands/edit/${brand.id}`} className="inline-flex items-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition">
                                  <FaRegEdit />
                                </Link>
                              
                                <Link onClick={()=>deleteBrand(brand.id)} className="inline-flex items-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition">
                                  <MdDelete />
                                </Link>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                  </table>
                  <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i + 1}
                        onClick={() => paginate(i + 1)}
                        className={`px-4 py-2 border rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
            </div>

          </main>
          </div>
        </div>
  )
}

export default Brand
