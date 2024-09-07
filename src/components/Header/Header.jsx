import './Header.scss';
import Logo from '../../assets/Codere_Logo.svg.png';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  const jackpots = Array(5).fill('JACKPOTS');

  return (
    <header>
      <div className='header'>
        <div className='logo-container'>
          <MenuIcon className='menu-icon' />
          <img src={Logo} alt="Codere Logo" className='logo' />
        </div>
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
