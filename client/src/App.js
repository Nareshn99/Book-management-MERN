import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import AddBook from './Pages/AddBook';
import BookList from './Pages/Book-List';
import DeleteBook from './Pages/DeleteBook';
import EditBook from './Pages/EditBook';

function App() {
  return (
    <div className="App">
    { 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/registor" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/book-list" element={<BookList />}></Route>
          <Route path="/addBook" element={<AddBook />}></Route>
          <Route path="/editBook" element={<EditBook />}></Route>
          <Route path="/deleteBook" element={<DeleteBook />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    }
    </div>
  )
}





export default App;