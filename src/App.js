import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: "AIzaSyDrgHVG1BNQrNZojFU0TVikj8MMYBq0NdQ",
        authDomain: "globalsec-1f9cd.firebaseapp.com",
        databaseURL: "https://globalsec-1f9cd.firebaseio.com",
        storageBucket: "globalsec-1f9cd.appspot.com",
        messagingSenderId: "583679746233"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
