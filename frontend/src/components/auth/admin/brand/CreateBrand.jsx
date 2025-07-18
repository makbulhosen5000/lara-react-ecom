import React, { useEffect, useState } from 'react'
import Sidebar from '../dashboard/Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { adminToken, apiUrl } from '../../../Http';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function CreateBrand() {
   const [disable, setDisable] = useState(false); 

  const navigate = useNavigate();
  // form handling by useForm hook
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


  const saveBrands = async(data) => {
    setDisable(true);
    
      try {
          const response = await fetch(`${apiUrl}/brands`, {
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
            // Redirect to the brands list page
            navigate('/admin/brands');
          } else {
            console.log("something went wrong");
            toast.error(result.message);
          }
      
        } catch (error) {
          console.error("Error fetching brands:", error);
        }
      };
      useEffect(() => {
        setTimeout(()=>{
          saveBrands();
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Brand</h2>
                  <Link to="/admin/brands" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    <i className="fa-solid fa-plus mr-2"></i> Brand List
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <div className=" bg-gray-100 flex items-center justify-center p-6">
                    <form onSubmit={handleSubmit(saveBrands)} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
                      {/* <h2 className="text-2xl font-bold text-gray-800 text-center">Add Brand</h2> */}

                      <div>
                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Brand Name</label>
                        <input
                        {
                          ...register('name',{
                              required: "The Brand field is required",
                            })
                        }
                          name="name"
                          type="text"
                          className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name && 'is-invalid'}`}
                          placeholder="Enter Brand Name"
                          required
                        />
                        {
                          errors.name && (
                          <span className="text-red-500 text-sm">{errors.name.message}</span>
                          )
                        }
                      </div>
                      <div>
                        <label className="block font-medium mb-1" htmlFor="name">Status</label>
                        <select
                        {
                          ...register('status',{
                              required: "The status field is required",
                            })
                        }
                        id="status"
                        name="status"
                        className={`w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.status && 'is-invalid'}`}
                        required              
                      >
                        <option value selected disabled>Select Status</option>
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                  
                      {
                        errors.status && (
                        <span className="text-red-500 text-sm">{errors.status.message}</span>
                        )
                      }
                      </div>

                      <button
                      disabled={disable}
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
            </div>

          </main>
          </div>
        </div>
  )
}

export default CreateBrand
