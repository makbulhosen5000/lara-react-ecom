import React, {useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff,LogIn } from 'lucide-react'; 

import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import { apiUrl } from '../../Http';

export default function Register() {
  
  const loginImg = "https://i.ibb.co.com/vjhV4YZ/register.jpg";
  const [showPassword, setShowPassword] = useState(false);

  
  // hide and show password function by clicking the eye icon
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };


  const navigate = useNavigate();
  
    // form handling by useForm hook
    const {
      register,
      handleSubmit,
      setError,
      formState: { errors },
    } = useForm();
      

    // user register function
    const userRegister = async (data) => {
      try {
        const response = await fetch(`${apiUrl}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.status === 200) {
          toast.success(result.message);
          navigate("/account/user/login");
        } else {
          const formErrors = result.errors || {};
          Object.keys(formErrors).forEach((field) => {
            setError(field, { message: formErrors[field][0] });
          });
        }
      } catch (error) {
        console.error("Error fetching customer Register:", error);
      }
    };


  return (
    <>
        <Helmet>
          <title>MAKFashion||User Register</title>
        </Helmet>
        <div className="flex items-center justify-center min-h-screen bg-gray-100 my-10">
            <div className="flex w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        
            {/* <!-- Left: Login Form --> */}
            <div className="w-1/2 p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Customer Register</h2>
              <p className="text-gray-500 mb-8">Welcome back! Please enter your details.</p>
              
              <form onSubmit={handleSubmit(userRegister)} className="space-y-5">
              <div>
                  <label htmlFor="name" className="block mb-1 text-gray-600">Name</label>
                  <input 
                  {
                    ...register('name',{
                        required: "The name field is required",
                    })
                  }
                  type="text" id="name" name="name" placeholder="Enter Your Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white" required  />
                  {
                    errors.name && (
                      <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )
                  }
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
                  <input 
                  {
                    ...register('email',{
                        required: "The email field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        } 
                    })
                  }
                  type="email" id="email" name="email" placeholder="you@example.com" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white" required  />
                  {
                    errors.email && (
                      <span className="text-red-500 text-sm">{errors.email.message}</span>
                    )
                  }
                </div>
                <div className="relative">
                  <label htmlFor="password" className="block mb-1 text-gray-600">Password</label>
                  <div className="relative">
                    <input
                    {...register("password", { required: "password is required" })}
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 bg-black text-white"
                    />
                    <button
                      type="button"
                      onClick={handleShowPassword}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                    {
                      errors.password && (
                        <span className="text-red-500 text-sm">{errors.password.message}</span>
                      )
                    }
                  </div>
                </div>
               
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline block text-end">Forgot Password?</Link>
              
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  <LogIn size={20} />
                  <span>Register</span>
                </button>
              </form>
              <p className="mt-5 text-sm text-gray-500">Don't have an account? <Link to="/account/login" className="text-blue-600 hover:underline">Sign In</Link></p>
            </div>

            {/* <!-- Right: Image --> */}
            <div className="w-1/2">
              <img src={loginImg} 
                  alt="Login Image" className="w-full h-full object-cover"/>
            </div>
            </div>
        </div>
    </>
  )
}

