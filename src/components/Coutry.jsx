import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import showIcon from '../assets/images/ShowIcon.png';

const Country = ({ country }) => (
  <div className="coutry-item">
    <Link to={`/details/${country.name}`}>
      <img src={showIcon} alt="show icon" />
    </Link>
    <div className="flag">
      <img src={country.flag} alt="flag" />
    </div>
    <div className="dis">
      <h4>{country.name}</h4>
      <p>{country.pop}</p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    pop: PropTypes.number,
    region: PropTypes.string,
  }).isRequired,
};

export default Country;
