"use client"
import {React,useState} from 'react'
import Image from 'next/image'
import logo from '../../../../../public/images/logo-adaptable-final-name.svg'

export default function login() {

    const [formData, setFormData] = useState({
        loginID:"",
        password:""
    });

    const [submitData, setSubmitData] = useState([]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault();

        setSubmitData([...submitData, formData]);
        setFormData({loginID:"",password:""});

        console.log(submitData);
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <Image className="h-14 mr-2" src={logo} alt="logo" />   
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={formSubmitHandler}>
                      <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login ID</label>
                          <input type="email" name="loginID" id="loginID" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={formData.loginID} onChange={handleChange} required="" />
                      </div>
                      <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.password} onChange={handleChange} required="" />
                      </div>
                      <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary-800">Sign in</button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}
