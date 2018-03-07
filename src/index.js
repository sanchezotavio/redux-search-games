import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import App from './components/App';
import reducers from './reducers';



const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));