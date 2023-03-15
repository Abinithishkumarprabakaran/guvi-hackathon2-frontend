import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useEffect, useState } from "react";
import { API } from "../global.js"
import { TheatreSelection } from "./TheatreSelection";

export function MovieDetails() {
	const {id} = useParams();

	// const movie = movieList[id]

	const [movie, setMovie] = useState([]);

    useEffect(() => {
      fetch(`${API}/movies/${id}`)
        .then((data) => data.json())
        .then((mvs) => setMovie(mvs));
    },[id])

	console.log(movie)

	const styles = {
		// Conditional Stylings
		color: movie.rating > 8.5 ? "green" : "crimson" // Ternary Operator
	};

  const navigate = useNavigate();

	return (
		<div>
      <div className="booking-movie-page">
        <div className="iframe-container">
              <iframe
                  width="500"
                  height="300"
                  src={movie.trailer}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
              </iframe>
            </div>
        <div className="movie-details-container">
          <div className="movie-specs">
            <h2 className="movie-name">
              {movie.name}
            </h2>
            <p style={styles} className="movie-rating">⭐{movie.rating}</p>
          </div>
              <p className="movie-summary">Actors: {movie.actors}</p>
              <p className="movie-summary">Director: {movie.director}</p>
              <p className="movie-summary">Music Director: {movie.music}</p>
          <p className="movie-summary">{movie.summary}</p>
              {/* <Button variant="contained" onClick={()=>navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>Back</Button> */}
        </div>
      </div>
      <hr />
      <div>
        <TheatreSelection />
      </div>
    </div>
	);
}

