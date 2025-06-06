import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { useLoader } from "../contexts/LoaderContext"; // importa il context

function Home() {
    // stato per la lista dei film, inizialmente vuoto
    const [movies, setMovies] = useState([]);

    // ottengo la funzione per attivare/disattivare il loader
    const { setLoading } = useLoader();

    // carica i film dal backend appena il componente monta
    useEffect(() => {
        setLoading(true); // mostra il loader

        axios.get("http://localhost:3000/movies")
            .then((resp) => {
                setMovies(resp.data); // salva i film nello stato
            })
            .catch((err) => {
                console.log("Errore nel caricamento dei film", err);
            })
            .finally(() => {
                setLoading(false); // nascondi il loader
            });
    }, []);

    return (
        <div className="container mt-4">
            {/* titolo pagina */}
            <h1>Lista Film</h1>

            <div className="row">
                {/* ciclo sui film e uso MovieCard */}
                {movies.map((film) => (
                    <div className="col-md-4 mb-4" key={film.id}>
                        <MovieCard movie={film} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
