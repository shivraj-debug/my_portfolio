
"use client"
import React, { useState } from 'react'

interface formData{
  name:string,
  email:string,
  message:string
}

function ContactForm() {

    const [formData,setFormData]=useState<formData>({
      name:"",
      email:"",
      message:""
    });
    const [loading,setLoading]=useState<boolean>(false)
    const [response,setResponse]=useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setResponse(null);
  
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const data = await res.json();
        setResponse(data.message);
        setLoading(false);
        if (res.ok) setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        setResponse("Something went wrong. Try again later.");
        setLoading(false);
      }
    };

  return (
    <div>
       <div>
                <form className="max-w-sm" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label className=" mb-2 text-xl font-medium text-gray-500">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  <div className="mt-2">
                    <label className="mb-2 text-xl font-medium text-gray-500">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-3 mt-1"
                      placeholder="enter your email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                    <label className="block mb-1 font-medium text-gray-500 mt-2 text-xl">
                      write your message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="Leave a comment..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    >
                    </textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
                  >
                    {loading ? "loading...":"submit"}
                  </button>
                  {response && <p>{response}</p>}
                </form>
              </div>
    </div>
  )
}

export default ContactForm
