import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {

  const navigate = useNavigate();
  function navigateHome(){
    navigate('/home');
  }
  function navigateProd(){
    navigate('/products');
  }
  return (
    <div>
      <h1>This is a landing page</h1>
      <button onClick={navigateHome} className='border border-black rounded-lg p-[2px] bg-white text-black font-normal text-[15px]'>Go to Home</button>
      <button onClick={navigateProd} className='border border-black rounded-lg p-[2px] bg-white text-black font-normal text-[15px]'>Go to Products</button>
    </div>
  )
}

export default LandingPage
