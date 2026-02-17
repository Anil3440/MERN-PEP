import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {

    const[product,setProduct] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        
        async function fetchProd(){
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const result = await response.json();
                setProduct(result);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchProd();
    },[id]);
    if(!product){
        return <h1>Loading...</h1>
    }
  return (
    <div className='border '>
        <h2>{product.title}</h2>
        <img src={product.image}  className='w-[100px] h-[100px]'></img>
        <p>{product.price}</p>
        <button onClick={()=>navigate(-1)} className='border rounded-lg m-2 p-1'>Go Back</button>
    </div>
  )
}

export default ProductDetails
