import { useParams } from "react-router-dom"
import movies from "../data/movies"

function MovieDetail() {
    const { id } = useParams()
    const movie = movies.find(film => film.id == id)

    if (!movie) {
        return <div className="container mt-4"><p>Film non trovato.</p></div>
    }

    return (
        <div className="container mt-4">
            <h1>{movie.title}</h1>
            <div className="row">
                <div className="col-md-4">
                    <img src={movie.poster} alt={movie.title} className="img-fluid movie-detail-img" />
                </div>
                <div className="col-md-8">
                    <p className="movie-detail-description"><strong>Anno:</strong> {movie.year}</p>
                    <p className="movie-detail-description">{movie.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail

