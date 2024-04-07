import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateBooks = () => {

    const {bid} = useParams()

    const navigate = useNavigate()

    const formFieldSet = {
        width : '300px',
        padding: '10px',
        margin : 'auto',
        borderRadius : '10px'
    }

    const [bookData, setBookData] = useState({
        'book_name':'',
        'book_author':'',
        'book_price':'',
    })

    const handleInputChange = (e)=>{
        const {name,value} = e.target   
        setBookData({
            ...bookData,
            [name]:value
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/viewbook/${bid}`)
        .then(response=> {
            setBookData({
                ...bookData,
                'book_name':response.data.book_name,
                'book_author':response.data.book_author,
                'book_price':response.data.book_price,
            })
        })
        .catch(error=>{
            console.error(error);
        })
    },[])

    const  handleFormSubmit = async(e) =>{
        e.preventDefault()

        try {
            const response = await axios.put(`http://localhost:5000/api/updatebooks/${bid}`, bookData);
            console.log(response.data)
            setBookData({
                'book_name':'',
                'book_author':'',
                'book_price':'',
            })
            navigate('/allbooks')
        } catch (error) {
            console.error(error);
            console.error('Error inserting data:', error);
        }
    }

  return (
    <div>
        <fieldset style={formFieldSet}>
            <legend> Update Book</legend>
            <tr>
                <td>Book name</td>
                <td>
                    <input type='text' name='book_name' value={bookData.book_name} onChange={handleInputChange}/>
                </td>
            </tr>
            <tr>
                <td>Book Auther</td>
                <td>
                    <input type='text' name='book_author' value={bookData.book_author} onChange={handleInputChange}/>
                </td>
            </tr>
            <tr>
                <td>Book Price</td>
                <td>
                    <input type='number' name='book_price' value={bookData.book_price} onChange={handleInputChange}/>
                </td>
            </tr>
             <tr>
                <td colSpan={2} align='center'>
                    <input type='button' value={"Update Book"} name='updatebooks'  onClick={handleFormSubmit}/>
                </td>
             </tr>
        </fieldset>
    </div>
  )
}

export default UpdateBooks