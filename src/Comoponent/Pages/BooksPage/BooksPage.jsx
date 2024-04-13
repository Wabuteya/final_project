import React from "react";
import './BooksPage.styles.css';
import Navbar from'../../../Comoponent/Layouts/Navbar/NavBar'
import  SaerchInputForm  from '../../Forms/Search-input-forms/SearchInputForm'
import ProductListingAll from '../../../Comoponent/Layouts/productlistingall/ProductListingAll';
import Footer from '../../Layouts/Footer/Footer';
const BookDetailsPage = ()  => {
    return (
      <section>
        <Navbar darktheme={true} />

        <div className="search-container">
          <h2>Find The <span className="text-primary">Books</span> That Your Looking For</h2>
            <SaerchInputForm darktheme={false} />
        </div>

        <ProductListingAll />
        <Footer />
      </section>
    );
  }
  
  export default BookDetailsPage;