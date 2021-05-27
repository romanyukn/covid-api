import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBlock from './searchBlock';
import StateCard from './stateCard';

function MainPage() {
  const apiKey = "";
  const [state, setState] = useState("DC");
  const [cases, setCases] = useState(0);

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`https://api.covidactnow.org/v2/state/${state}.json?apiKey=${apiKey}`);
      setCases(res.data.actuals.cases);
    }
    getData();
  }, [state])

  const handleSearch = (state) => {
    setState(state);
  }

  return(
    <div>
      <SearchBlock onSearch={handleSearch}/>
      <StateCard stateCases={cases} state={state}/>
    </div>
  )
}

export default MainPage;
