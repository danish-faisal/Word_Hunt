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

  const dictionaryAPI = async () => {
    try {
      const data = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      setMeanings(data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    dictionaryAPI();
    // eslint-disable-next-line
  }, [word]);

  return (
    <div className="App" style={{
      height: '100vh', backgroundColor: theme ? "#fff" : "#282c34",
      color: theme ? "black" : "white",
      transition: "all 0.5s linear"
    }}>
      <Container maxWidth="md" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly' }}>
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          {/* <span>{theme ?  : }</span> */}
          <span style={{ cursor: "default" }} title='Dark Mode'>&#127761;</span>
          <Switch
            checked={theme}
            onChange={() => setTheme(!theme)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span style={{ cursor: "default" }} title='Light Mode'>&#127765;</span>
        </div>
        <Header word={word} setWord={setWord} theme={theme} />
        {meanings && <Definitions word={word} meanings={meanings} theme={theme} />}
      </Container>
    </div>
  );
}

export default App;
