import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");

  async function dictionaryAPI() {
    try {
      const data = await axios('https://api.dictionaryapi.dev/api/v2/entries/en/plane');

      console.log(data.data);
    } catch (error) {
      console.error("Error:" + error);
    }
  }

  useEffect(() => {
    dictionaryAPI();
  }, []);

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: '#fff' }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header word={word} setWord={setWord} />
      </Container>
    </div>
  );
}

export default App;
