import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Countries from './Countries';
import Destination from './Destination';

import { fetchData } from './fetchData';
import Header from './Header';

function App() {
  const [countriesInfo, setCountriesInfo] = React.useState([]);

  React.useEffect(() => {
    fetchData().then((countryData) => setCountriesInfo(countryData));
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/destination'>
            <Destination />
          </Route>
          <Route path='/'>
            <Countries countriesInfo={countriesInfo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
