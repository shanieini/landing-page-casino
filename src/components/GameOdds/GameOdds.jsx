import './GameOdds.scss';
import GameOddsList from '../GameOddsList/GameOddsList.jsx';
import React, { useEffect, useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import { gameOddsStore } from '../../stores/GameOddsStore.js';
import { Select, MenuItem, CircularProgress } from '@mui/material';

export default observer(function GameOdds() {
  const [sortMethod, setSortMethod] = useState('date');

  useEffect(() => {
    gameOddsStore.fetchGameOdds();
  }, []);

  const sortedGames = useMemo(() => {
    const gamesToSort = [...gameOddsStore.gameOddsData];

    switch (sortMethod) {
      case 'name-asc':
        return gamesToSort.sort((a, b) => {
          const nameA = a.name || ''; // Fallback to empty string
          const nameB = b.name || ''; // Fallback to empty string
          return nameA.localeCompare(nameB);
        });
      case 'name-desc':
        return gamesToSort.sort((a, b) => {
          const nameA = a.name || ''; // Fallback to empty string
          const nameB = b.name || ''; // Fallback to empty string
          return nameB.localeCompare(nameA);
        });
      default:
        return gamesToSort.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    }
  }, [gameOddsStore.gameOddsData, sortMethod]);

  return (
    <div className='game-odds'>
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
      {sortedGames.length > 0 ? (
        <GameOddsList games={sortedGames} />
      ) : (
        <CircularProgress className='loader' />
      )}
    </div>
  );
});
