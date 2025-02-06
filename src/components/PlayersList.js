import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Player from './Player';
import { players } from '../players';

const PlayersList = () => {
const [searchTerm, setSearchTerm] = useState('');

const filteredPlayers = players.filter(player =>
  player.name.toLowerCase().includes(searchTerm.toLowerCase())
);

return (
  <div>
    <input
      type="text"
      placeholder="Search players..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '10px',
        margin: '20px',
        width: '300px',
        borderRadius: '20px',
        border: '2px solid #ccc',
      }}
    />
    <Row className="justify-content-center">
      {filteredPlayers.map((player, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <Player {...player} />
        </Col>
      ))}
    </Row>
  </div>
);
};


export default PlayersList;