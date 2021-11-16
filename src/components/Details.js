import { useSelector } from 'react-redux';

const Details = () => {
  const infoList = useSelector((state) => state.covidReducer);
  let deaths;
  let confirmed;
  let recovered;
  let critical;

  console.log(window.location.pathname.slice(1));

  const renderInformation = infoList.map((covid) => {
    if (covid.code === window.location.pathname.slice(1)) {
      console.log(covid);
      deaths = covid.latest_data.deaths;
      confirmed = covid.latest_data.confirmed;
      recovered = covid.latest_data.recovered;
      critical = covid.latest_data.critical;
    }
    return 'No Countrie found';
  });

  return (
    { renderInformation },
      <div>
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
      </div>
  );
};

export default Details;
