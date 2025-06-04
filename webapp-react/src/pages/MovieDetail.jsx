import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/movies/${id}`)
            .then(res => {
                setMovie(res.data);
            })
            .catch(() => {
                setMovie(null);
            });
    }, [id]);

    if (!movie) {
        return <div className="container mt-4">Film non trovato.</div>;
    }

    console.log(movie.image)
    return (
        <div className="container mt-4">
            <h1>{movie.title}</h1>
            <img src={movie.image} alt={`Locandina di ${movie.title}`} className="img-fluid movie-detail-img mb-3" />

            <p><strong>Anno:</strong> {movie.release_year}</p>
            <p><strong>Regista:</strong> {movie.director}</p>
            <p><strong>Genere:</strong> {movie.genre}</p>
            <p>{movie.abstract}</p>

            <h3 className="mt-4">Recensioni</h3>
            {movie.reviews && movie.reviews.length > 0 ? (
                <ul className="list-group">
                    {movie.reviews.map(review => (
                        <li key={review.id} className="list-group-item">
                            <strong>{review.name}</strong> - Voto: {review.vote}/5
                            <p>{review.text}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nessuna recensione disponibile.</p>
            )}
        </div>
    );
}

export default MovieDetail;
