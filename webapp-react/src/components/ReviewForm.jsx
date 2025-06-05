import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [name, setName] = useState('');
    const [vote, setVote] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/movies', {
            movie_id: movieId,
            name,
            vote,
            text
        })
            .then(() => {
                // pulisco i campi
                setName('');
                setVote('');
                setText('');

                // callback per aggiornare lista recensioni
                if (onReviewAdded) {
                    onReviewAdded();
                }
            })
            .catch((error) => {
                console.error("errore durante l'invio della recensione", error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h4>Lascia una recensione</h4>

            <input
                type="text"
                placeholder="Il tuo nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="number"
                placeholder="Voto da 1 a 5"
                value={vote}
                onChange={(e) => setVote(e.target.value)}
                min="1"
                max="5"
                required
            />

            <textarea
                placeholder="Scrivi la tua recensione"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            ></textarea>

            <button type="submit">Invia</button>
        </form>
    );
};

export default ReviewForm;