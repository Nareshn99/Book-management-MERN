import React, { useState } from 'react'
import './DeleteBook.css';
import { Link } from 'react-router-dom';

function DeleteBook() {
    
    const [title, setTitle] = useState("")
    const saveBook = async (e) => {
        e.preventDefault()
        let data = { title }
        await fetch("/books", {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result)
            if (result.status === 200) {
                window.alert("Successfully Book Deleted")
            } else {
                window.alert("Invalid Details")
            }
        })
    }
    return (
        <div className='main'>
        <div className='Deletebook'>
            <h3>Confirm DeleteBook By Title</h3>
            <label className="label">Enter Book Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="submit" onClick={saveBook}>Yes</button>
            <Link className="butt" to="/book-list">No</Link>
            <Link className="butt" to="/book-list">Go to Book-List</Link>
        </div>
        </div>
    )
}

export default DeleteBook
