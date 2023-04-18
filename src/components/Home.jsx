import React from 'react'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://www.harvestify.in/images/sustainability/1.jpg" className="max-w-xl rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">App for farmers</h1>
            <p className="py-6">Plant diseases are a severe threat to the entire production. Therefore, it is essential for farmers to effectively deal with them and check them with the help of timely prevention.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Home
