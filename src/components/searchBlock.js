import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

function SearchBlock({onSearch}) {
  const [searchValue, setSearchValue] = useState();
  return(
    <div className="container">
      <InputGroup className="mb-3" 
        style={{
          marginTop: 20,
          paddingRight: 300,
          paddingLeft: 300, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center'}}
      >
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{marginRight: 15}}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={() => onSearch(searchValue)}>Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export default SearchBlock;
