import React from "react";
import NavBar from '../../Layouts/Navbar/NavBar';
import DetailsSection from "../../Layouts/Details-section/DetailsSection";
import Footer from '../../Layouts/Footer/Footer';

const BooksDetails = ()  => {
    return (
      <div className="BooksDetails">
        <NavBar darktheme={true}/>

        <DetailsSection />
        <Footer />
    
      </div>
    );
  }
  
  export default BooksDetails;