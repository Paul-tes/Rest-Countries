import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../components/styles/details.css';

const Details = () => {
  const { cName } = useParams();
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.name === cName);
  if (country && countries.length > 0) {
    const propertyNames = country.gini ? Object.keys(country.gini) : ['N/A'];
    return (
      <div className="details-page-container">
        <div className="details-top">
          <img src={country.flag || ''} alt="flag" />
          <div className="des-writings">
            <h4 className="offical-name">{country.officialName || 'N/A'}</h4>
            <h2 className="name">{country.name || 'Not Resolved'}</h2>
            <p className="population">{country.pop || 'Not known'}</p>
            <p className="region">{country.region || 'Not resolved'}</p>
          </div>
        </div>
        <div className="pop-text-div">
          ABOUT
          {' '}
          {country.name.toUpperCase() || 'Not Resolved'}
        </div>
        <ul className="details-container">
          <li className="detail-item">
            <p>Population</p>
            <p>{country.pop || 'Not known'}</p>
          </li>
          <li className="detail-item">
            <p>Area</p>
            <p>
              {country.area || 'Not Resolved still'}
              m

            </p>
          </li>
          <li className="detail-item">
            <p>Gini</p>
            <p>{propertyNames || 'No gini'}</p>
            <p>{country.gini[propertyNames] || 'N/A'}</p>
          </li>
          <li className="detail-item">
            <a href={country.map || 'https://www.google.com/maps'} target="_blank" rel="noopener noreferrer">Map</a>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className="no-filtered-country">
      Oops! No Filtered Countries.
      <br />
      Try Again!
    </div>
  );
};

export default Details;
