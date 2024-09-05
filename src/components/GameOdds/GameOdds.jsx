import './GameOdds.scss';
import GameOddsList from '../GameOddsList/GameOddsList.jsx';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { gameOddsStore } from '../../stores/GameOddsStore.js';
import { Select, MenuItem, CircularProgress } from '@mui/material';

export default observer(function GameOdds() {
  const [sortedGames, setSortedGames] = useState([]);
  const [sortMethod, setSortMethod] = useState('date');

  useEffect(() => {
    gameOddsStore.fetchGameOdds();
  }, []);

  useEffect(() => {
    const gamesToSort = [...gameOddsStore.gameOddsData];
    const sortedByDate = gamesToSort.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
    setSortedGames(sortedByDate);
  }, [gameOddsStore.gameOddsData]);

  useEffect(() => {
    let gamesToSort = [...gameOddsStore.gameOddsData];

    switch (sortMethod) {
      case 'name-asc':
        const sortedByNameAsc = gamesToSort.sort((a, b) => {
          return a.games[0].name.localeCompare(b.games[0].name);
        });
        setSortedGames(sortedByNameAsc);
        break;
      case 'name-desc':
        const sortedByNameDesc = [...gamesToSort].sort((a, b) => {
          return b.games[0].name.localeCompare(a.games[0].name);
        });
        setSortedGames(sortedByNameDesc);
        break;
      default:
        const defaultSorted = [...gamesToSort].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        setSortedGames(defaultSorted);
    }
  }, [sortMethod]);

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
