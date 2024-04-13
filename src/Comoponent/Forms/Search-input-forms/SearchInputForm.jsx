import React from "react";
import './SearchInputForm.styles.css'

const SearchInputForm = ({darktheme})  => {
    return (
      <div className={`search-input-form-container ${darktheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
        <input type="text"className="search-input" placeholder="Search Books"/>
        <button className="search-button">Search</button>
       </div>
    );
  }
  
  export default SearchInputForm;