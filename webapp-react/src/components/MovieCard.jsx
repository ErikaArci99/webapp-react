import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
        <div className="card h-100 shadow-sm">
            <img
                src={movie.image ? `/img/movies/${movie.image}` : "https://via.placeholder.com/150x220?text=No+Image"}
                className="card-img-top"
                alt={movie.title}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.abstract || "Nessuna descrizione disponibile."}</p>
                {/* link alla pagina di dettaglio */}
                <Link to={`/movie/${movie.id}`} className="btn btn-outline-primary mt-auto">
                    Dettagli
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;


