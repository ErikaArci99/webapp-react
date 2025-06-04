import { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ movieId, onReviewAdded }) => {
    const [name, setName] = useState('');
    const [vote, setVote] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/reviews', {
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

  );
};

export default ReviewForm;