// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth & Onboarding Screens
import Splace from '../screens/Auth/Splace/Splace';
import AppWellcome from '../screens/Auth/AppWellcome/AppWellcome';
import IntroOne from '../screens/Auth/Intro-One/Intro-one';
import IntroTwo from '../screens/Auth/Intro-Two/Intro-Two';
import IntroThree from '../screens/Auth/Intro-Three/Intro-Three';
import IntroFour from '../screens/Auth/Intro-Four/Intro-Four';
import Login from '../screens/Auth/Login/Login';
import OTP from '../screens/Auth/OTP/OTP';

// Main App (Bottom Tabs)
import BottomTabNavigator from './BottomTabNavigator';

// ✅ No types
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Splace"
        >
            <Stack.Screen name="Splace" component={Splace} />
            <Stack.Screen name="Wellcome" component={AppWellcome} />
            <Stack.Screen name="IntroOne" component={IntroOne} />
            <Stack.Screen name="IntroTwo" component={IntroTwo} />
            <Stack.Screen name="IntroThree" component={IntroThree} />
            <Stack.Screen name="IntroFour" component={IntroFour} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
