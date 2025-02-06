import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import PlayersList from './components/PlayersList';
import LoadingSpinner from './components/LoadingSpinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay (replace with actual data fetching if needed)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3-second loading simulation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar bg="dark" variant="dark" className="mb-4">
            <Container>
              <Navbar.Brand href="#home" style={{ fontSize: '2em', fontWeight: 'bold' }}>
                ⚽ FIFA 2023 Player Cards
              </Navbar.Brand>
            </Container>
          </Navbar>
          <Container>
            <PlayersList />
          </Container>
        </>
      )}
    </div>
  );
}

export default App;