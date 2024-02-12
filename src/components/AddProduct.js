import React, { useState } from 'react';

const AddProduct = ()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error,setError] = useState(false);

    const addProduct = async () =>{
        console.warn(!name);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }

        console.log(name,price,category,company)
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product",{
            method: 'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = await result.json();
        console.log(result);
    }
    return(
        <div className='product'>
            <h1>Add Product </h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product name'>
            </input>
            {error && !name && <span className='invalid-input'>Enter valid name</span> }

            <input value={price} onChange={(e)=>{setPrice(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product price'>
            </input>
            {error && !price && <span className='invalid-input'>Enter valid price</span> }

            <input value={category} onChange={(e)=>{setCategory(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product category'>
            </input>
            {error && !category && <span className='invalid-input'>Enter valid category</span> }

            <input value={company} onChange={(e)=>{setCompany(e.target.value)}} className='inputBox' type='text' placeholder='Enter Product company'>
            </input>
            {error && !company && <span className='invalid-input'>Enter valid company</span> }

             <button className="app-btn" onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;