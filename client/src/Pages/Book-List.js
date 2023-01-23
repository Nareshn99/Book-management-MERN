import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function BookList() {
    const [value, setValue] = useState([])

    // useEffect(() => {
    //   fetch('/books').then(response => {
    //     setValue(response.json())
    //   })
    // }, [])
    // axios.get('/books')
    // .then(function (response) {
    //   // handle succes
    //   setValue(response.data)
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // useEffect(() => {
    //     const getAds = async () => {
    //       const res = await axios.get('/books')
    //       setValue(res.data)
    //       console.log(res.data.data)
    //     }
    //     getAds()
    //   }, [])

      useEffect(() => {
        fetch("/books").then((result) => {
            result.json().then((resp) => {
                setValue(resp.data)
            })
        })
    }, [])


    return (
        <div className="App">
            <h1>BookList</h1>
            <Link className="butt" to="/addBook">Add New Book</Link>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Title</th>
                        <th>reviews</th>
                        <th>ISBN</th>
                        <th>EditBook</th>
                       <th>Delete Book</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.map((item, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.reviews}</td>
                                <td>{item.ISBN}</td>
                                <td><Link className="butt" to="/editBook">Edit Book</Link></td>
                                <td><Link className="butt" to="/deleteBook">Delete Book</Link></td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default BookList
