import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const Books = () => {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        const fetchAllBooks = async()=>{
            try{
                const res = await axios.get("http://localhost:8801/books")
                setBooks(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id)=> {
        try{
            await axios.delete("http://localhost:8801/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <h1>Communal Clothing Recycler</h1>
            <div className = "books">
                {books.map(book=>(
                    <div className="book" key = {book.id}>
                        {book.Picture && <img src={book.Picture} alt="" />}
                        <h2>{book.Item}</h2>
                        <p>{book.Description}</p>
                        <span>{book.Price}</span>
                        <button className="delete" onClick={()=>handleDelete(book.id)}>Delete</button>
                        <button className="update"><Link to ={`/update/${book.id}`}>Update</Link></button>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new item</Link></button>
        </div>
        );
    
}

export default Books