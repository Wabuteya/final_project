import React from "react";
import './Showcase.styles.css'
import NavBar from "../Navbar/NavBar";
import SearchInputForm from "../../Forms/Search-input-forms/SearchInputForm";

const Showcase = ()  => {
    return (
      <div className="Showcase-container">
        <NavBar darktheme={false}/>
          <section className="Showcase-content">
              <h1>New Books Available</h1>
                <p>Get Your Self Quality Books At A Much Cheaper Price</p>
                <SearchInputForm  darktheme={true}/>
          </section>
       </div>

    );
  }
  
  export default Showcase;