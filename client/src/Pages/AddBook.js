import React, { useState } from 'react'
import { Link } from 'react-router-dom';
function AddBook() {

    const [title, setTitle] = useState("")
    const [excerpt, setExcerpt] = useState("")
    const [ISBN, setISBN] = useState("")
    const [category, setCategory] = useState("")
    const [releasedAt, setReleasedAt] = useState("")


    const saveBook = async (e) => {
        e.preventDefault()
        let data = {title,excerpt,ISBN,category,releasedAt  }
        await fetch("/books", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result)
            if (result.status === 201) {
                window.alert("Successfully Book Added")
            }else {
                window.alert("Invalid Details")
            }
        })
    }


    return (
        <body className="main">
            <form method="POST" className='sign-up'>
                <label className="label">Enter Book Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="label">Enter Book Excerpt</label>
                <input type="text" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
                <label className="label">Enter Book ISBN no.</label>
                <input type="text" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                <label className="label">Enter Book Category</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                <label className="label">Enter Book Released Date</label>
                <input type="text" value={releasedAt} onChange={(e) => setReleasedAt(e.target.value)} />
                <button className="butt" type="submit" onClick={saveBook}>Add New Book</button>
                <Link className="butt" to="/book-list">Go to Book-List</Link>
            </form>
        </body>
    )
}

export default AddBook
