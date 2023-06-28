import PropTypes from 'prop-types';
import showIcon from '../assets/images/ShowIcon.png';

const Country = ({ country }) => (
  <div className="coutry-item">
    {console.log(country.name, ' Population: ', country.pop)}
    <a href="sdfsdf">
      <img src={showIcon} alt="show icon" />
    </a>
    <div className="flag">
      <img src={country.flag} alt="flag" />
    </div>
    <div className="dis">
      <h4>{country.name}</h4>
      <p>{country.pop}</p>
    </div>
  </div>
);

// {console.log(country.pop, ' Name: ', country.name, ' region: ', country.region)}

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    pop: PropTypes.number,
    region: PropTypes.string,
  }).isRequired,
};

export default Country;
