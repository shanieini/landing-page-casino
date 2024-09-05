import './GameOddsPreview.scss';

export default function GameOddsPreview({ game }) {
  
  return (
    <div className="game-odds-preview">
      <div className='top-section'>
        <div>World Cup 2022</div>
        <div>{new Date(game.startDate).toLocaleDateString()}</div> 
      </div>
      <div className='odds-section'>
        {game.games.map((g, index) => (
          <div key={index} className='odds-item'>
            <span>{index === 0 ? '1' : index === 2 ? '2' : g.name} </span>
            <span>{g.odd}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
