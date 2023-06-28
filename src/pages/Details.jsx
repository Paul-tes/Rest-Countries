import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../components/styles/details.css';

const Details = () => {
  const { cName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === cName);

  const propertyNames = country.gini ? Object.keys(country.gini) : ['N/A'];

  return (
    <div className="details-page-container">
      <div className="details-top">
        <img src={country.flag} alt="flag" />
        <div className="des-writings">
          <h4 className="offical-name">{country.officialName}</h4>
          <h2 className="name">{country.name}</h2>
          <p className="population">{country.pop}</p>
          <p className="region">{country.region}</p>
        </div>
      </div>
      <div className="pop-text-div">
        ABOUT
        {' '}
        {country.name.toUpperCase()}
      </div>
      <ul className="details-container">
        <li className="detail-item">
          <p>Population</p>
          <p>{country.pop}</p>
        </li>
        <li className="detail-item">
          <p>Area</p>
          <p>
            {country.area}
            {' '}
            m
          </p>
        </li>
        <li className="detail-item">
          <p>Gini</p>
          <div>
            <p>{propertyNames}</p>
            <p>{country.gini[propertyNames]}</p>
          </div>
        </li>
        <li className="detail-item">
          <a href={country.map} target="_black">Map</a>
        </li>
      </ul>
    </div>
  );
};

export default Details;
