import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper'

const detailStyleNull = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '4px',
    paddingRight: '4px',
    textAlign: 'center'
}

const detailStyle = {
    paddingTop: '20px',
    paddingBottom: '20px',
    paddingLeft: '4px',
    paddingRight: '4px',
}

const title = {
    margin: 0,
    padding: 0
}

const imgStyle = {
    width: '100%',
    maxWidth: '180px'
}

const cloud = (game) => {
    if (game.cover) {
        if (game.cover.cloudinary_id) {
            return `https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${game.cover.cloudinary_id}.jpg`
        }
        else {
            return ''
        }
    } else {
        return ''
    }
}

class ListDetail extends Component {

    render() {
        if (!this.props.game) {
            return (
                <Grid item style={detailStyleNull} xs={12}>
                    <Paper style={detailStyle}>
                        Click one of the games to see details.
                    </Paper>
                </Grid>
            );
        }
        return (
            <Grid item style={detailStyle} xs={12}>
                <Paper style={detailStyle}>
                    <Grid item lg={4} sm={12}>
                        <img src={cloud(this.props.game)} style={imgStyle} alt={this.props.game.name} title={this.props.game.name} />
                    </Grid>
                    <Grid item lg={8} sm={12}>
                        <h4 style={title}>{this.props.game.name}</h4>
                        <p>{this.props.game.summary}</p>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        game: state.activeGame
    };
}

export default connect(mapStateToProps)(ListDetail)