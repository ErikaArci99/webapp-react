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
        <form onSubmit={handleSubmit} className="review-form m-5">
            <h4 className="review-form__title">Lascia una recensione</h4>

            <div className="mb-3">
                <label htmlFor="review-name" className="form-label">Nome</label>
                <input
                    type="text"
                    id="review-name"
                    name="name"
                    placeholder="Il tuo nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-control form-control-lg review-form__input"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="review-vote" className="form-label">Voto (da 1 a 5)</label>
                <input
                    type="number"
                    id="review-vote"
                    name="vote"
                    placeholder="Voto da 1 a 5"
                    value={vote}
                    onChange={(e) => setVote(e.target.value)}
                    min="1"
                    max="5"
                    required
                    className="form-control form-control-lg review-form__input"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="review-text" className="form-label">Recensione</label>
                <textarea
                    id="review-text"
                    name="text"
                    placeholder="Scrivi la tua recensione"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    className="form-control form-control-lg review-form__textarea"
                    rows="4"
                ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100 review-form__button">
                Invia
            </button>
        </form>


    );
};

export default ReviewForm;