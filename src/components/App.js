import React, { Component } from 'react';
import List from '../containers/list'
import ListDetail from '../containers/list-detail'
import SearchBar from './SearchBar'
import Grid from 'material-ui/Grid';

const style = {
    flexGrow: 1,
    padding: '10px',
    overflowX: 'hidden',
    fontFamily: 'Arial',
    fontSize: '15px'
}

export default class App extends Component {
   
    render() {
     
        return (
            <Grid container style={style} >
                <SearchBar />
                <ListDetail />
                <List />                
            </Grid>
        );
    }
}