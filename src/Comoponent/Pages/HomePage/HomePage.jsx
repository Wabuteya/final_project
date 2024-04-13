import React from "react";
import Showcase from "../../Layouts/Showcase/Showcase";
import ProductListing from "../../Layouts/ProductListing/ProductListing";
import Footer from "../../Layouts/Footer/Footer";


const HomePage = ()  => {
    return (
      <div className="HomePage">
        <section>
          <Showcase/>
          <ProductListing />
          <Footer />
        </section>
    
      </div>
    );
  }
  
  export default HomePage;