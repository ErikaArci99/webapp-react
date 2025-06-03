import { useParams } from "react-router-dom"
import movies from "../data/movies"

function MovieDetail() {
    // recupera l'id dalla rotta
    const { id } = useParams()

    // trova il film corrispondente usando 'film' come nome variabile
    const movie = movies.find(film => film.id == id)

    // se il film non esiste
    if (!movie) {
        return <div className="container mt-4"><p>Film non trovato.</p></div>
    }

    return (
        <div className="container mt-4">
            {/* pagina dettaglio film */}
            <div className="row">
                <div className="col-md-4">
                    <img src={movie.poster} alt={movie.title} className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                    <h1>{movie.title}</h1>
                    <p><strong>Anno:</strong> {movie.year}</p>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
