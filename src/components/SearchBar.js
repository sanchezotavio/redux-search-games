import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchGame from '../actions/action_search_game'
import { bindActionCreators } from 'redux'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';

const searchStyle = {
    padding: '10px'
}

function SearchIcon(props) {
    return (
        <SvgIcon {...props}>
            <path xmlns="http://www.w3.org/2000/svg" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </SvgIcon>
    );
}

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'term': ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ 'term': e.target.value })
        e.preventDefault()
    }

    handleSubmit(e) {
        this.props.searchGame(this.state.term)
        e.preventDefault()
    }

    render() {
        return (
            <Grid xs={12} style={searchStyle}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel htmlFor="label">Search Game</InputLabel>
                        <Input id="input-search" fullWidth value={this.state.term} onChange={this.handleChange} />
                    </FormControl>
                    <Button variant="fab" color="primary" style={styleButton} type="submit"  >
                        <SearchIcon />
                    </Button>
                </form>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        games: state.games
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchGame: searchGame }, dispatch);
}

const styleButton = {
    marginLeft: '10px'
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);