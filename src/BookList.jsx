import React from 'react'; 
import Book from './Book'; 
 
const bookData = [ 
  { 
    title: "Let us C", 
    author: "Yashwant Kanitkar", 
    imgLink: "https://m.media-amazon.com/images/I/61RzCIAcAvL._AC_UF1000,1000_QL80_.jpg", 
    price: 452, 
  }, 
  { 
    title: "Clean Code", 
    author: "Robert C. Martin", 
    imgLink: "https://m.media-amazon.com/images/I/41zoxjP9lcL._AC_UF1000,1000_QL80_DpWeblab_.jpg", 
    price: 299.99, 
  }, 
  { 
    title: "Atomic Habits", 
    author: "James Claer", 
    imgLink: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._AC_UF1000,1000_QL80_.jpg", 
    price: 600, 
  }, 
  { 
    title: "The subtle Art of Not Giving F*ck", 
    author: "Mark Manson", 
    imgLink: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UF1000,1000_QL80_.jpg", 
    price: 90, 
  }, 
  { 
    title: "The Alchemist", 
    author: "Paulo Coelho", 
    imgLink: "https://m.media-amazon.com/images/I/71pJIgY8ZuL._AC_UF1000,1000_QL80_.jpg", 
    price:900, 
  }, 
]; 
 
const BookList = () => { 
  return ( 
    <div className='booklist'> 
      {bookData.map((book, index) => ( 
        <Book 
          key={index} 
          title={book.title} 
          author={book.author} 
          imgLink={book.imgLink} 
          price={book.price} 
        /> 
      ))} 
    </div> 
  ); 
} 
 
export default BookList;