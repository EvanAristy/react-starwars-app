import React from 'react';
import SwApi from '../services/sw-api';
//bootstrap
import {Card, CardGroup} from 'react-bootstrap'

const Page = (ship) => {
    return (
        <div className='page'>
            <CardGroup  style={{width: '18rem' }}>

            <Card key={ship.url}>
                <Card.Header as="h5">Name: {ship.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Ship details</Card.Title>
                    <Card.Text>
                    Price: {ship.price} <br />
                    Make: {ship.make} <br />
                    Max-Speed: {ship.speed}
                    </Card.Text>
                 
                </Card.Body>
            </Card>
            </CardGroup>

        </div>
    )
}

export default Page;
