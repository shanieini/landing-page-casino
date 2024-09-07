import { useState } from 'react';
import './GameOddsPreview.scss';

export default function GameOddsPreview({ game }) {
  const [clickedOdds, setClickedOdds] = useState({});

  const handleOddClick = (index) => {
    setClickedOdds((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="game-odds-preview">
      <div className="top-section">
        <div className="title">World Cup 2022</div>
        <div className="date">{new Date(game.startDate).toLocaleDateString()}</div>
      </div>
      <div className="odds-section">
        {game.games.map((g, index) => (
          <div
            key={index}
            className={`odds-item ${clickedOdds[index] ? 'clicked' : ''}`}
            onClick={() => handleOddClick(index)}
          >
            <span className='name'>{index === 0 ? '1' : index === 2 ? '2' : g.name}</span>
            <span className='odd'>{g.odd}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
