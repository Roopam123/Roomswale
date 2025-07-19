/**
 * AppNavigator.js
 *
 * Description:
 *   This is the root stack navigator for the app.
 *   It handles authentication, onboarding, and the main tab-based layout.
 *   All screens are organized here, with optional transitions and header settings.
 *
 * Author: Roopam
 * Created: Saturday, July 19, 2025
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth and Onboarding Screens
import Splace from '../screens/Auth/Splace/Splace';
import AppWellcome from '../screens/Auth/AppWellcome/AppWellcome';
import IntroOne from '../screens/Auth/Intro-One/Intro-one';
import IntroTwo from '../screens/Auth/Intro-Two/Intro-Two';
import IntroThree from '../screens/Auth/Intro-Three/Intro-Three';
import IntroFour from '../screens/Auth/Intro-Four/Intro-Four';
import Login from '../screens/Auth/Login/Login';
import OTP from '../screens/Auth/OTP/OTP';

// Main App Screen (with bottom tabs)
import BottomTabNavigator from './BottomTabNavigator';

// Create stack navigator
const Stack = createNativeStackNavigator();

/**
 * AppNavigator
 *
 * The main stack-based navigation for the app.
 * Includes onboarding/auth flow and then launches into the main tabs.
 */
const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }} // Hide headers for all screens
            initialRouteName="Splace" // Optional: you can change this to conditionally load
        >
            {/* Onboarding / Auth Screens */}
            <Stack.Screen name="Splace" component={Splace} />
            <Stack.Screen name="Wellcome" component={AppWellcome} />
            <Stack.Screen name="IntroOne" component={IntroOne} />
            <Stack.Screen name="IntroTwo" component={IntroTwo} />
            <Stack.Screen name="IntroThree" component={IntroThree} />
            <Stack.Screen name="IntroFour" component={IntroFour} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OTP" component={OTP} />

            {/* Main App Navigation with Bottom Tabs */}
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
