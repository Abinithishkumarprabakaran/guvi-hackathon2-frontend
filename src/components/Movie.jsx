import { useState } from "react";
import { Counter } from "./Counter";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export function Movie({ movie, id }) {

    const styles = {
        color: movie.rating > 8.5 ? "green" : "crimson"
    };
    const [show, setShow] = useState(true);

    const navigate = useNavigate();
    return (
      <div className="movie-container">
        <Card className="movie-card" sx={{ width: '75%' }}>
          <CardMedia className="movie-poster" image={movie.poster} title={movie.name}/>
             <CardContent sx={{ paddingBottom: '0px' }}>
                <div className="movie-specs">
                  <h3 className="movie-name">
                    {movie.name}
                  </h3>
                  <p style={styles} className="movie-rating">⭐{movie.rating}</p>
                </div>
              </CardContent>
              <CardActions>
                <Counter />
                <Button
                    color="primary"
                    onClick={() => navigate(`/movies/${id}`)}
                    variant="contained"
                    sx={{marginLeft: "auto"}}
                    aria-label="Movie Details">
                  Book
                </Button>
              </CardActions>
        </Card>
      </div>
    );
}
