import '../components/styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import worldMapImg from '../assets/images/world-map.png';
import searchIcon from '../assets/images/search-line.png';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from '../components/Coutry';
import Loading from '../components/Loading';

const Home = () => {
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(fetchCountries());
  }, [distpatch]);

  const [region, setRegion] = useState('Africa');

  const eventSearch = (value) => {
    const str = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setRegion(str);
  };

  const { countries, status } = useSelector((state) => state.countries);
  const filteredCountries = countries.filter((country) => country.region === region);
  return (
    <div className="home-container">
      <div className="header-div">
        <img className="world-map" src={worldMapImg} alt="world map" />
        <div className="header-search-container">
          <p>
            Countries reaches Our Planet. Have you ever questioned your country&apos;s population?
            You are there right now to discover.
          </p>
          <p className="total-population">1.3M</p>
          <div className="search-div">
            <input type="text" className="search input" placeholder="search by continent" onChange={(e) => eventSearch(e.target.value)} />
            <button type="button" className="search-btn"><img src={searchIcon} alt="search-icon" /></button>
          </div>
        </div>
      </div>
      <div className="pop-text-div">POPULATION OF COUNTRY&apos;S</div>
      <div className="coutry-lists">
        {status === 'loadding'
          && <Loading />}
        {status === 'loaded'
        && filteredCountries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
        {status === 'loaded'
        && filteredCountries.length === 0
        && (
        <div className="no-flltered-Country">
          Opps! No Filtered Countries.
          <br />
          Try Again!
        </div>
        )}
      </div>
    </div>
  );
};

export default Home;
