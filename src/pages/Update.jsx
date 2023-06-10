import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Update = () => {
    const [book,setBook] = useState({
        Item:"",
        Description:"",
        Price:null,
        Picture:"",
    });

    const navigate = useNavigate() 
    const location = useLocation()

    const bookId =location.pathname.split("/")[2]

    // console.log(location.pathname.split("/")[2])

    const handleChange = (e) =>{
        setBook(prev=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try{
            await axios.put("http://localhost:8801/books/"+bookId, book)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    console.log(book)
    return (
        <div classname="form">
            <h1>Update the item</h1>
            <input type = "text" placeholder="Item" onChange={handleChange} name="Item"/>
            <input type = "text" placeholder="Description" onChange={handleChange} name="Description"/>
            <input type = "number" placeholder="Price" onChange={handleChange} name="Price"/>
            <input type = "text" placeholder="Picture" onChange={handleChange} name="Picture"/>
            <button className="formButton" onClick={handleClick}>Update</button>
            </div>
    )
}

export default Update