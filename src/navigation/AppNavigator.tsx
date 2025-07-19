/**
 * AppNavigator.tsx
 *
 * Description:
 *   Defines the main stack navigator for the app. 
 *   The root stack holds the BottomTabNavigator as its main screen.
 *   This structure allows you to easily add future stack screens (modals, details, etc.)
 *   that appear above the tab navigation.
 *
 * Author: Roopam
 * Created: Saturday, July 19, 2025
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';

// Create a native stack navigator instance
const Stack = createNativeStackNavigator();

/**
 * AppNavigator
 * 
 * Sets up the root navigation stack. 
 * Currently, it only holds the BottomTabNavigator, but more stack screens
 * (like details or modals) can be added easily in the future.
 *
 * @returns {JSX.Element} The main navigation stack for the app.
 */
const AppNavigator = () => {
    return (
        <Stack.Navigator
            // Hide headers for all screens in this stack for a seamless look
            screenOptions={{ headerShown: false }}
        >
            {/* MainTabs shows the bottom tab navigation UI */}
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
            {/* Example for future addition: */}
            {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        </Stack.Navigator>
    );
};

export default AppNavigator;
