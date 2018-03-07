function selectGame(game) {
    return {
      type: 'GAME_SELECTED',
      payload: game
    }
  }
  export default selectGame