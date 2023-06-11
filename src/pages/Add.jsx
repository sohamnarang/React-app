import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Add = () => {
    const [book,setBook] = useState({
        Item:"",
        Description:"",
        Price:null,
        Picture:"",
    });

    const navigate = useNavigate() 

    const handleChange = (e) =>{
        setBook(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.post("http://localhost:8801/books", book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(book)
    return (
        <div classname="form">
            <h1>Add New Item</h1>
            <input type = "text" placeholder="Item" onChange={handleChange} name="Item"/>
            <input type = "text" placeholder="Description" onChange={handleChange} name="Description"/>
            <input type = "number" placeholder="Price" onChange={handleChange} name="Price"/>
            <input type = "text" placeholder="Picture" onChange={handleChange} name="Picture"/>
            <button classname="formButton" onClick={handleClick}>Add</button>
            </div>
    );
};

export default Add