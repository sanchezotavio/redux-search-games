import React, { Component } from 'react'
import { connect } from 'react-redux'
import selectGame from '../actions/action_select_game'
import { bindActionCreators } from 'redux'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'

const detailStyle = {
  padding: '4px',
  textAlign: 'center'
}


const imgStyle = {
  width: '100%',
  maxWidth: '80px'
}


class List extends Component {
  renderList() {
    if (this.props.searchGame.games) {
      return this.props.searchGame.games.map((games) => {

        const cloud = () => {
          if (games.cover) {
            if (games.cover.cloudinary_id) {
              return `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${games.cover.cloudinary_id}.jpg` 
              
            }
            else {
              return ''
            }
          } else {
            return ''
          }
        }

        return (
          <Grid item key={games.name} lg={4} md={6} sm={12} onClick={() => this.props.selectGame(games)}>
            <Paper style={detailStyle}>
              <Grid item xs={12}>
                <img src={cloud()} style={imgStyle} alt={games.name} title={games.name} />
              </Grid>
              <Grid item lg={12} >
                {games.name}
              </Grid>
            </Paper>
          </Grid>
        );
      });
    }
  }
  render() {
    return (
      <Grid container spacing={24}>
        {this.renderList()}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchGame: state.searchGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectGame: selectGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List)