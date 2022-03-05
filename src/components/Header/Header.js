import { createTheme, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import './Header.css';
import { debounce } from "lodash";

const Header = ({ word, setWord, theme }) => {
    const handleText = debounce((text) => {
        setWord(text);
    }, 1000);

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: theme ? "#000" : "#fff"
            },
            mode: theme ? "light" : "dark",
        },
    });

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' label='Search a Word' onChange={(e) => handleText(e.target.value)} variant='standard' />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;