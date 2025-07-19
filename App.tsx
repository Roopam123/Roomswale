// App.js
// Root entry point of the React Native app
// Author: Roopam
// Created: Saturday, July 19, 2025

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Handles navigation tree/state
import AppNavigator from './src/navigation/AppNavigator';      // Main app navigation structure

/**
 * Main application component.
 * Wraps navigators with the NavigationContainer.
 */
const App = () => {
  return (
    // NavigationContainer manages navigation tree and transitions
    <NavigationContainer>
      {/* AppNavigator defines all routes and screen structures */}
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
