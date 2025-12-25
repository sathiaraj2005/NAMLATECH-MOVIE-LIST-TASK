import { useEffect, useState, useRef } from "react";
import "./App.css";

const API_KEY = "2fdf06bb494c5e88f44825c6c03169ae";
const COLLECTION_ID = 10;

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/collection/${COLLECTION_ID}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const parts = data.parts || [];
        setMovies(parts);
        setSelectedMovie(parts[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  // Smoothered Scroll Function
  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) return <div className="loading-screen">🔥 Igniting Engine...</div>;

  return (
    <div className="app">
      {/* 1. The "Vignette" Glassy Shadow Overlay */}
      <div className="vignette-overlay"></div>
      
      <div className="background-container">
        <img 
          key={selectedMovie?.id} // Key forces a re-mount for the CSS animation
          src={`https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path}`} 
          className="bg-fade-in"
          alt="bg"
        />
      </div>

      <main className="hero">
        <div className="hero-content">
          <span className="trending-tag">#1 IN MOVIES TODAY</span>
          <h1 className="glow-text">{selectedMovie?.title}</h1>
          <p className="description">{selectedMovie?.overview}</p>
          <div className="action-btns">
            <button className="play-btn">PLAY NOW</button>
            <button className="info-btn">MORE INFO</button>
          </div>
        </div>
      </main>

      <footer className="carousel-wrapper">
        <button className="nav-arrow left" onClick={() => scroll("left")}>‹</button>
        
        {/* The Black Gradient Fading Regions */}
        <div className="fade-edge left"></div>
        <div className="movie-list" ref={scrollRef}>
          {movies.map((movie) => (
            <div 
              key={movie.id}
              className={`movie-card ${selectedMovie?.id === movie.id ? 'active-card' : ''}`}
              onClick={() => setSelectedMovie(movie)}
            >
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" />
            </div>
          ))}
        </div>
        <div className="fade-edge right"></div>

        <button className="nav-arrow right" onClick={() => scroll("right")}>›</button>
      </footer>
    </div>
  );
}

export default App;