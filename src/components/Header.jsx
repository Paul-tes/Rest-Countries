import leftArr from '../assets/images/GoBackIcon.png';
import micIcon from '../assets/images/MicIcon.png';
import settingIcon from '../assets/images/SettingsIcon.png';
import './styles/header.css';

const Header = () => (
  <header>
    <nav>
      <a href="/">
        <img src={leftArr} alt="left arrow icon" />
      </a>
      <h1>The World</h1>
      <div>
        <a href="esdsa">
          <img src={micIcon} alt="mic icon" />
        </a>
        <a href="esddsa">
          <img src={settingIcon} alt="setting icon" />
        </a>
      </div>
    </nav>
  </header>
);

export default Header;
