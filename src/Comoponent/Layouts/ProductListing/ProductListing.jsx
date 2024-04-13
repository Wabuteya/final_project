import React from "react";
import './ProductListing.styles.css'
import ProductListingCard from "../../cards/Product-listing-card/ProductListingCard";
import { BooksData } from "../../Pages/util/BooksData";




const ProductListing = ()  => {
    return (
      <div className="product-listing-container">
        <div className="container">
         <h2>Here Are Some Of The <span className="text-primary"> Books </span>That You Might Be Interested In </h2>

         <div className="listing-container">
            {BooksData.slice(0,4).map((book) => (
              <ProductListingCard bookData = {book}/>
            ))}
         </div>
        </div>
      </div>
    );
  }
  
  export default ProductListing;