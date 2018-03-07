import axios from 'axios'


function searchGame(term) {
    return function (dispatch) {

        axios.get(`http://localhost:5000/search?term=${term}`)
         
            .then(               
                response => {
                    dispatch(searchSuccessGame(JSON.parse(response.data)))
                } 
            )
            .catch(error => {
                dispatch(searchErrorGame(error))
            });

        return dispatch(searchRequestGame());
    }
}

function searchSuccessGame(data) {
    return {
        type: 'SEARCH_SUCCESS_GAME',
         data
    }
}

function searchErrorGame(error){
    return{
        type: 'SEARCH_ERROR_GAME',
        error: error
    }
}


function searchRequestGame(){
    return{
        type: 'SEARCH_REQUEST_GAME'
    }    
}




export default searchGame