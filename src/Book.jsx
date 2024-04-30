import React from 'react'; 
 
const Book = ({ title, author, imgLink, price }) => { 
  return ( 
    <div className="book"> 
      <img src={imgLink} alt={title} /> 
      <h2>{title}</h2> 
      <p>Author: {author}</p> 
      <p>Price: ₹{price}</p> 
    </div> 
  ); 
} 
 
 
 
export default Book; 
 
const Title = (props) => <h2>{props.title}</h2>; 
 
const Price = (props) => <h2>{props.price}</h2>; 
 
const Image = (props) => <img src={props.imageUrl} />; 
 
const Author = (props) => <h3>{props.author}</h3>;