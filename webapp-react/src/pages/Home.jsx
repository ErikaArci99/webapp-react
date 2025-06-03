import movies from "../data/movies"
import MovieCard from "../components/MovieCard"

function Home() {
    return (
        <div className="container mt-4">
            {/* pagina home con lista film */}
            <h1>Lista Film</h1>

            <div className="row">
                {/* ciclo su ogni film e uso la componente */}
                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

