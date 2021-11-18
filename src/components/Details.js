import { useSelector } from 'react-redux';
import './Details.css';

const Details = () => {
  const infoList = useSelector((state) => state.covidReducer);
  let deaths;
  let confirmed;
  let recovered;
  let critical;
  let todayConfirmed;
  let todayDeaths;
  let calculated;

  const renderInformation = infoList.map((covid) => {
    if (covid.code === window.location.pathname.slice(1)) {
      deaths = covid.latest_data.deaths;
      confirmed = covid.latest_data.confirmed;
      recovered = covid.latest_data.recovered;
      critical = covid.latest_data.critical;
      todayConfirmed = covid.today.confirmed;
      todayDeaths = covid.today.deaths;
      calculated = covid.latest_data.calculated;
    }
    return 'No Countrie found';
  });

  return (
    { renderInformation },
      <div>
        <div>
          <span className="Stats-Title">Today stats:</span>
          <div className="Stats-Entrie">
            <span>Confirmed:</span>
            <span>{todayConfirmed}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Deaths:</span>
            <span>{todayDeaths}</span>
          </div>
        </div>
        <div>
          <span className="Stats-Title">Latest data:</span>
          <div className="Stats-Entrie">
            <span>Confirmed:</span>
            <span>{confirmed}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Recovered:</span>
            <span>{recovered}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Critical:</span>
            <span>{critical}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Deaths:</span>
            <span>{deaths}</span>
          </div>
        </div>
        <div>
          <span className="Stats-Title">Country statistics:</span>
          <div className="Stats-Entrie">
            <span>Death rate:</span>
            <span>{calculated.death_rate}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Recovery rate:</span>
            <span>{calculated.recovery_rate}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Recover/Death ratio:</span>
            <span>{calculated.recovered_vs_death_ratio}</span>
          </div>
          <div className="Stats-Entrie">
            <span>Cases per million:</span>
            <span>{calculated.cases_per_million_population}</span>
          </div>
        </div>
      </div>
  );
};

export default Details;
