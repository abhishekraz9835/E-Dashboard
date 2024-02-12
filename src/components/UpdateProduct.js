import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const UpdateProduct = ()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
         let result = await fetch(`http://localhost:5000/product/${params.id}`)
         result = await result.json();
         setName(result.name);
         setPrice(result.price);
         setCategory(result.category);
         setCompany(result.company);
    }

    const updateProduct = async () =>{
         let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
         });
         result =await result.json()
         console.warn(result);
         navigate("/")
    }
    return(
        <div className='product'>
            <h1>Update Product </h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product name'>
            </input>

            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product price'>
            </input>

            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product category'>
            </input>

            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product company'>
            </input>

            <button className="app-btn" onClick={updateProduct}>Update</button>
        </div>
    )
}

export default UpdateProduct;