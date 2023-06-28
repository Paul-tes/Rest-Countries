import { useParams } from 'react-router-dom';
import '../components/styles/details.css';

const Details = () => {
  const { country } = useParams();
  return (
    <div className="details-page-container">
      {console.log(country)}
      <div className="details-top">
        <img src="https://flagcdn.com/w320/et.png" alt="flag" />
        <div className="des-writings">
          <h4 className="offical-name"> Democratic Republic of Ethiopia </h4>
          <h2 className="name">Ethiopia</h2>
          <p className="population">123123123</p>
          <p className="region">Africa</p>
        </div>
      </div>
      <div className="pop-text-div">ABOUT ETHIOPIA</div>
      <ul className="details-container">
        <li className="detail-item">
          <p>Population</p>
          <p>23456789 p</p>
        </li>
        <li className="detail-item">
          <p>Area</p>
          <p>6789 m</p>
        </li>
        <li className="detail-item">
          <p>Gini</p>
          <p>234</p>
        </li>
        <li className="detail-item">
          <a href="map">Map</a>
        </li>
      </ul>
    </div>
  );
};

export default Details;
