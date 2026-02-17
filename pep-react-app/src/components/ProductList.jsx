import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products,setProducts] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const result = await response.json();
                setProducts(result);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    },[]);

  return (
    <div>
        <h1 className='mx-[60px] my-[20px] text-3xl font-bold'>Product List :</h1>
        <div className='flex flex-wrap  justify-around gap-5'>
            {
                products.map(el=>{
                    return (
                        <div key={el.id} className='h-[250px] w-[400px] border rounded-lg text-wrap flex flex-col justify-center items-center'>
                            <p>{el.id}.{el.title}</p>
                            <img src={el.image} key={el.id} className='w-[100px] h-[100px]'></img>
                            <p>{el.price}</p>
                            <Link to={`/products/${el.id}`}>View product</Link>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductList
