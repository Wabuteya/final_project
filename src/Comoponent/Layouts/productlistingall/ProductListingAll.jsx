import React from "react";
import './ProductListingAll.styles.css';
import ProductListingCard from '../../cards/Product-listing-card/ProductListingCard';
import { BooksData } from "../../Pages/util/BooksData";


const ProductListingAll = ()  => {
    console.log(BooksData)
    return (

        <section className="product-listing-all-container">
            <div className="container">

                <div className="grid-container">
                    {BooksData.map((book) => {
                        return (
                            <div className="grid-item">
                                <ProductListingCard bookData={book}/>
                            </div>    
                        )
                    })}
                    
                </div>
            </div>
        </section>
    );
  }
  
  export default ProductListingAll;