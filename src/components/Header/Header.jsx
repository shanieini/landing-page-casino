import './Header.scss';

export default function Header() {
  const jackpots = Array(5).fill('JACKPOTS');

  return (
    <header>
      <div className='header'>
        <div>codere</div>
        <div className='jackpots-container'>
          {jackpots.map((text, index) => (
            <div key={index}>{text}</div>
          ))}
        </div>
        <div className='acceder'>Acceder</div>
      </div>
    </header>
  );
}
