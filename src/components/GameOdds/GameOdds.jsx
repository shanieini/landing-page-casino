import './GameOdds.scss';
import GameOddsList from '../GameOddsList/GameOddsList.jsx';
import MatchForm from '../MatchForm/MatchForm.jsx';
import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { gameOddsStore } from '../../stores/GameOddsStore.js';
import { Select, MenuItem, CircularProgress, Snackbar, SnackbarContent } from '@mui/material';

export default observer(function GameOdds({ isMobile }) {
  const [sortMethod, setSortMethod] = useState('date');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    gameOddsStore.fetchGameOdds();
  }, []);

  const sortedGames = useMemo(() => {
    const gamesToSort = [...gameOddsStore.gameOddsData];

    switch (sortMethod) {
      case 'name-asc':
        return gamesToSort.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      case 'name-desc':
        return gamesToSort.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
      default:
        return gamesToSort.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }
  }, [gameOddsStore.gameOddsData, sortMethod, gameOddsStore.gameOddsData.length]);

  const handleAddMatch = (newMatch) => {
    const matchObject = {
      startDate: newMatch.startDate,
      name: `${newMatch.homeTeam} - ${newMatch.awayTeam}`,
      games: [
        { odd: parseFloat(newMatch.homeOdd), sortOrder: 0, name: newMatch.homeTeam },
        { odd: parseFloat(newMatch.drawOdd), sortOrder: 1, name: 'X' },
        { odd: parseFloat(newMatch.awayOdd), sortOrder: 2, name: newMatch.awayTeam }
      ]
    };

    gameOddsStore.addMatch(matchObject);
    setSnackbarMessage('Match added successfully!');
    setSnackbarOpen(true);
  };

  return (
    <div className='game-odds'>
      <div className='control-container'>
        <MatchForm isMobile={isMobile} onAddMatch={handleAddMatch} />
        <div className='select'>
          <Select
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            displayEmpty
          >
            <MenuItem value="date">By Date</MenuItem>
            <MenuItem value="name-asc">By Name A-Z</MenuItem>
            <MenuItem value="name-desc">By Name Z-A</MenuItem>
          </Select>
        </div>
      </div>

      {sortedGames.length > 0 ? (
        <GameOddsList games={sortedGames} />
      ) : (
        <CircularProgress className='loader' sx={{ color: '#79C000' }} size={60} />
      )}


      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
      >
        <SnackbarContent
          style={{ backgroundColor: '#79C000', color: 'black' }}
          message={snackbarMessage}
        />
      </Snackbar>
    </div>
  );
});
