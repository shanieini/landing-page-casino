import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './MatchForm.scss';

export default function MatchForm({ isMobile, onAddMatch }) {
    const [newMatch, setNewMatch] = useState({
        homeTeam: '',
        homeOdd: '',
        drawOdd: '',
        awayTeam: '',
        awayOdd: '',
        startDate: '',
    });

    const [formError, setFormError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMatch((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { homeTeam, homeOdd, drawOdd, awayTeam, awayOdd, startDate } = newMatch;

        if (!homeTeam || !homeOdd || !drawOdd || !awayTeam || !awayOdd || !startDate) {
            setFormError('All fields are required.');
            return;
        }

        if (isNaN(homeOdd) || isNaN(drawOdd) || isNaN(awayOdd)) {
            setFormError('Odds must be valid numbers.');
            return;
        }

        const textPattern = /^[A-Za-z\s]+$/;
        if (!textPattern.test(homeTeam) || !textPattern.test(awayTeam)) {
            setFormError('Team names must contain only letters.');
            return;
        }

        setFormError('');
        onAddMatch(newMatch);
        setNewMatch({ homeTeam: '', homeOdd: '', drawOdd: '', awayTeam: '', awayOdd: '', startDate: '' });
    };

    return (
        <div className="add-match-form">
            <h3>Add a New Match</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                    <TextField
                        label="Home Team Name"
                        name="homeTeam"
                        value={newMatch.homeTeam}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        required
                        autoComplete="off"
                    />
                    <TextField
                        label="Home Team Odd (1)"
                        name="homeOdd"
                        value={newMatch.homeOdd}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-row">
                    <TextField
                        label="Draw Odd (X)"
                        name="drawOdd"
                        value={newMatch.drawOdd}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        required
                        autoComplete="off"
                    />
                    <TextField
                        label="Away Team Name"
                        name="awayTeam"
                        value={newMatch.awayTeam}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        required
                        autoComplete="off"
                    />
                </div>
                <div className="form-row">
                    <TextField
                        label="Away Team Odds (2)"
                        name="awayOdd"
                        value={newMatch.awayOdd}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        required
                        autoComplete="off"
                    />
                    <TextField
                        label="Date of Game"
                        name="startDate"
                        value={newMatch.startDate}
                        onChange={handleInputChange}
                        margin="dense"
                        size="small"
                        type="datetime-local"
                        required
                    />
                </div>
                {formError && <p className="error">{formError}</p>}
                <div className="button-container">
                    <Button type="submit" variant="contained">
                        Add Match
                    </Button>
                </div>
            </form>
        </div>
    );

}
