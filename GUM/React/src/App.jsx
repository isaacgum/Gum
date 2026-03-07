import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
//67e5d50
const API_URL = 'https://www.omdbapi.com?apikey=67e5d50';

const movie1 = {
"Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",

"Title": "Inception",

"Type": "movie",

"Year": "2010",

"imdbID": "tt1375666",
}
const App = () => {

  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = useState('');

const searchMovies = async (title) => {
const responese = await fetch(`${API_URL}&s=${title}`);
const data = await responese.json();

setMovies(data.Search);
}
    
useEffect(() => {
searchMovies('Inception');
}, []);



  return (
     <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value= {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          />
          </div>
          {movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ):(
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
          }
          
        </div>
  );
}
export default App;