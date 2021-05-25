import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SearchBlock from './searchBlock';

function InstaPage() {
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get(`https://www.instagram.com/${user}/?__a=1`);
      return res.data;
    }
    
    console.log(getData());
  }, [user])

  const handleSearch = (user) => {
    setUser(user);
  }

  return(
    <div>
      <SearchBlock onSearch={handleSearch}/>
      <h3>InstaPage</h3>
    </div>
  )
}

export default InstaPage;
