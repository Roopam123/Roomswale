// App.js
// Root entry point of the React Native app
// Author: Roopam
// Created: Saturday, July 19, 2025

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet } from 'react-native';
import { Colors } from './src/utils/constent';
import { styles } from './App.Styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primary}
      />
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
