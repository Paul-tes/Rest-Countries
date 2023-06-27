import './styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import worldMapImg from '../assets/images/world-map.png';
import searchIcon from '../assets/images/search-line.png';
import { fetchCountries } from '../redux/coutries/countriesSlice';

const Home = () => {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(fetchCountries());
  }, [distpatch]);

  const { coutries, status } = useSelector((state) => state.countries);
  console.log(coutries, status);

  return (
    <div className="home-container">
      <div className="header-div">
        <img className="world-map" src={worldMapImg} alt="world map" />
        <div className="header-search-container">
          <p>
            Coutris reaches Our Planet. Have you ever questioned your country&apos;s population?
            You are there right now to discover.
          </p>
          <p className="total-population">1.3M</p>
          <div className="search-div">
            <input type="text" className="search input" placeholder="search by continent" />
            <button type="button" className="search-btn"><img src={searchIcon} alt="search-icon" /></button>
          </div>
        </div>
      </div>
      <div className="pop-text-div">POPULATION OF COUNTRY&apos;S</div>
      <div className="coutry-lists">
        <div className="coutry-item" />
        <div className="coutry-item" />
        <div className="coutry-item" />
        <div className="coutry-item" />
        <div className="coutry-item" />
        <div className="coutry-item" />
      </div>
    </div>
  );
};

export default Home;
