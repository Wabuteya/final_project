import React, {useState,useEffect} from "react";
import'./DetailsSection.styles.css';
import { useParams } from "react-router-dom";
import { BooksData } from "../../Pages/util/BooksData";


const DetailsSection = ()  => {
    const { id } = useParams ();
    const [bookData, setBookData] = useState({});

    useEffect (() => {
        let newData = BooksData.filter((book) =>book.id ===parseInt(id));

        setBookData(newData[0])
    },[id])
    return (
      <section className="detail-section-container">
        <div className="container">
            <div className="flex-container">
                <div className="book-imag-container">
                    <img src={bookData.book_url} alt="book" />

                </div>
                <div className="book-detail-contianer">
                    <h2>{bookData.book_name}</h2>
                    <p className="text-primary">{bookData.auther_name}</p>
                    <p className="book-description">{bookData.book_description}</p>
                    <p><b>Language</b>: {bookData.language}</p>
                    <h3 className="text-primary">&#85;&#83;&#104; {bookData.price}</h3>

                    <a href="#" className="button-primary"> Add To Cart </a>

                </div>
            </div>
        </div>
      </section>
      );
  }
  
  export default DetailsSection;