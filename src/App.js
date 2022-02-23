import { Container } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");

  async function dictionaryAPI() {
    try {
      const data = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      setMeanings(data.data);
    } catch (error) {
      console.error("Error:" + error);
    }
  }

  useEffect(() => {
    dictionaryAPI();
  }, [word]);

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: '#fff' }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header word={word} setWord={setWord} />
        {meanings && <Definitions word={word} meanings={meanings} />}
      </Container>
    </div>
  );
}

export default App;
