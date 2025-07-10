import React from 'react'
import Sidebar from '../../components/auth/admin/Sidebar'
import { Link } from 'react-router-dom'

function CreateCategory() {
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
                  <Link to="/admin/categories" className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    <i className="fa-solid fa-plus mr-2"></i> Category List
                  </Link>
                </div>
                <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Category</h2>
                  <form action="#" method="POST" className="space-y-4">

                    <div>
                      <label for="name" className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                      <input type="text" id="name" name="name" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder='Enter Category Name' />
                      </div>
                    <div>
                      <button type="submit"
                              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

            </div>

          </main>
          </div>
        </div>
  )
}

export default CreateCategory
