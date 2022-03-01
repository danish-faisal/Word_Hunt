import { Container, Switch } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/Header/Header';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [theme, setTheme] = useState(false);

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
    <div className="App" style={{
      height: '100vh', backgroundColor: theme ? "#fff" : "#282c34",
      color: theme ? "black" : "white",
      transition: "all 0.5s linear"
    }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly' }}>
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{theme ? "Light" : "Dark"} Mode</span>
          <Switch
            checked={theme}
            onChange={() => setTheme(!theme)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </div>
        <Header word={word} setWord={setWord} theme={theme} />
        {meanings && <Definitions word={word} meanings={meanings} theme={theme} />}
      </Container>
    </div>
  );
}

export default App;
