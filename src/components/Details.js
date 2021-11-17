import { useSelector } from 'react-redux';

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
          <span>Today stats:</span>
          <span>
            Confirmed:
            {todayConfirmed}
          </span>
          <span>
            Deaths:
            {todayDeaths}
          </span>
        </div>
        <div>
          <span>
            Latest data:
          </span>
          <span>
            Confirmed:
            {confirmed}
          </span>
          <span>
            Recovered:
            {recovered}
          </span>
          <span>
            Critical:
            {critical}
          </span>
          <span>
            Deaths:
            {deaths}
          </span>
        </div>
        <div>
          <span>Country statistics:</span>
          <span>
            Death rate:
            {calculated.death_rate}
          </span>
          <span>
            Recovery rate:
            {calculated.recovery_rate}
          </span>
          <span>
            Recover/Death ratio:
            {calculated.recovered_vs_death_ratio}
          </span>
          <span>
            Cases per million:
            {calculated.cases_per_million_population}
          </span>
        </div>
      </div>
  );
};

export default Details;
