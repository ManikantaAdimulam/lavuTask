/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import DashBoard from './Source/Controllers/DashBoard';
import configureStore from './Source/Redux/Store';
import {Provider} from 'react-redux';

const Store = configureStore();

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={Store}>
        <DashBoard />
      </Provider>
    </>
  );
};

export default App;
