import React from 'react';
import { Card } from 'react-bootstrap';

function StateCard({ stateCases, state }) {
  return(
    <Card style={{ width: '18rem', marginLeft: 500, textAlign: 'center'}}>
      <Card.Body>
        <Card.Title>Total cases in {state}</Card.Title>
        <Card.Text>
          {stateCases}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default StateCard;
