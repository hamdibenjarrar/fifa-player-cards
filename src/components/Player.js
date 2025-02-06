import React from 'react';
import { Card } from 'react-bootstrap';
import { StarIcon } from '@heroicons/react/24/solid';


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card 
      style={{ 
        width: '20rem', 
        margin: '1rem',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        background: 'linear-gradient(145deg, #ffffff, #f8f9fa)'
      }}
      className="hover:transform hover:scale-105"
    >
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        style={{ 
          height: '300px', 
          objectFit: 'cover',
          borderTopLeftRadius: '15px',
          borderTopRightRadius: '15px'
        }} 
      />
      <Card.Body style={{ position: 'relative' }}>
        <div style={{ 
          position: 'absolute',
          top: '-25px',
          right: '15px',
          background: 'gold',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>#{jerseyNumber}</span>
        </div>
        
        <Card.Title style={{ fontSize: '1.5em', marginBottom: '0.5rem' }}>
          {name} <StarIcon style={{ width: '20px', color: 'gold' }} />
        </Card.Title>
        
        <div style={{ marginBottom: '0.5rem' }}>
          <span style={{ fontWeight: 'bold' }}>Team:</span> {team}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontWeight: 'bold' }}>Nationality:</span> 
            <span role="img" aria-label="flag" style={{ marginLeft: '5px' }}>
              {nationality === 'Argentina' ? '🇦🇷' : 
               nationality === 'Portugal' ? '🇵🇹' :
               nationality === 'France' ? '🇫🇷' : '🇧🇷'}
            </span>
          </div>
          <div>
            <span style={{ fontWeight: 'bold' }}>Age:</span> {age}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "🌍",
  jerseyNumber: 0,
  age: "N/A",
  imageUrl: "https://via.placeholder.com/300x400?text=Player+Image"
};

export default Player;