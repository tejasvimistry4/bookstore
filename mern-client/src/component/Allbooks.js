import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Allbooks = () => {
    const [bookData, setBookData] = useState([])   

    useEffect(() =>{
        getbooks()
        
    },[])

    const  getbooks=async()=>{
        axios.get('http://localhost:5000/api/viewbook')
        .then(response=>{
            setBookData(response.data)
        }).then(error=>{
            console.error(error)
        })
    }
    

    const deletebook = async(id)=>{
        axios.delete(`http://localhost:5000/api/deletebooks/${id}`)
        getbooks()
    }
    
    return (
    <div>
            <h1 align='center'>All Books</h1>

        <table border={1}  align='center'>
            <tr>
                <td>Book Name</td>
                <td>Book Author</td>
                <td>Book price</td>
                <td>Action</td>
            </tr>
            {
                bookData.map(books=>(
                    <tr>
                        <td>{books.book_name}</td>
                        <td>{books.book_author}</td>
                        <td>{books.book_price}</td>
                        <td>
                             <a href={`updatebooks/${books._id}`}>Edit</a>
                        </td>
                        <td>
                             <a href="#" onClick={()=>deletebook(books._id)}>Delete</a>
                        </td>
                        
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default Allbooks