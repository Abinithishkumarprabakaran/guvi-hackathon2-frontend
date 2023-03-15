import { Movie } from "./Movie";
import { Addmovie } from "./Addmovie";
import { IconButton } from "@mui/material";
import { useState, useEffect } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "../global.js"

export function MovieList({}) {

  const navigate = useNavigate();
  
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((data) => data.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(),[])

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {method: "DELETE"})
      .then(()=>getMovies());
  }
  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie 
            key={mv.id} 
            movie={mv} 
            id={mv.id}
            // deleteButton={
            //   <IconButton 
            //     sx={{ marginLeft:"auto" }}
            //     color="error"
            //     onClick={() => {deleteMovie(mv.id)}}>
            //     <DeleteIcon />
            //   </IconButton>}
          
            // editButton = {
            //   <IconButton
            //     color="secondary"
            //     onClick={() => {navigate(`/edit-movie/${mv.id}`)}}
            //     sx={{ marginLeft:"auto" }}
            //     >
            //       <EditIcon/>
            //   </IconButton>
            // }
          />
        ))}
      </div>
    </div>
  );
}
