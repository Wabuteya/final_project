import React from "react";
import './ProductListingCard.styles.css'
import { Link } from "react-router-dom";


const ProductListingCard = ({ bookData }) => {
  return (
    <div className="product-listing-card">
      <div className="product-listing-image-container">
        <img
          src={bookData.book_url}
          alt={bookData.book_name}  // Assuming alt text is the book name
          className="product-listing-image"
        />
      </div>
      <div className="product-listing-details-continer">
        <h3>{bookData.book_name}</h3>
        <p className="author-name">{bookData.author_name}</p>
        <p className="Pricing">&#85;&#83;&#104;s{bookData.price}</p>  {/* Use Unicode character for Rupee */}
      </div>
      <div className="card-button-container">
        <Link to={`/book-details/${bookData.id}`} className="product-listing-button">
          Add To Cart
        </Link>
      </div>
    </div>
  );
};

  
  export default ProductListingCard;