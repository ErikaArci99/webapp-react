import movies from "../data/movies"

function Home() {
    return (
        <div className="container mt-4">
            {/* pagina home con lista film */}
            <h1>Lista Film</h1>

            <div className="row">
                {/* ciclo su ogni film */}
                {movies.map((movie) => (
                    <div className="col-md-4 mb-4" key={movie.id}>
                        <div className="card">
                            <img src={movie.poster} className="card-img-top" alt={movie.title} />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
