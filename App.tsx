/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRouter from './src/routes/stack';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}

export default App;
