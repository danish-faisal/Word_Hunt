import { createTheme, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import './Header.css';

const Header = ({ word, setWord }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark',
        },
    });

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='input'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' label='Search a Word' onChange={(e) => setWord(e.target.value)} variant='standard' />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;