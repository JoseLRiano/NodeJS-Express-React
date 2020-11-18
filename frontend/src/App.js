import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    title: {
        flexGrow: 1,
    },
}));

const App = () => {
    const [nasaImg, setNasaImg] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const fetchImage = async () => {
        const response = await axios.get('/home');
        setNasaImg(response.data);
        }
        fetchImage()
    }, [])
    return (
        <div>   
            <AppBar className={classes.root} position="relative" >
                <Toolbar>
                    <Typography variant="h6" className={classes.title} >
                        Picture of the Day
                    </Typography>
                    <Button color="inherit">See Your Location</Button>
                    
                </Toolbar>
            </AppBar>
            <img className="nasaImage" src={nasaImg.hdurl} alt="Nasas Picture of the date" />
            <div className="nasaInfo">
                <h2 className="nasaTitle">{nasaImg.title}</h2>
                <p className="nasaDescription">{nasaImg.explanation}</p>   
            </div>
             
        </div>
    );
}

export default App;
