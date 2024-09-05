import './Header.scss';
import Logo from '../../assets/Codere_Logo.svg.png';

export default function Header() {
  const jackpots = Array(5).fill('JACKPOTS');

  return (
    <header>
      <div className='header'>
        <img src={Logo} alt="Codere Logo" className='logo' />
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
