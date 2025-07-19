/**
 * BottomTabNavigator.tsx
 * 
 * Description: 
 *   This file defines the BottomTabNavigator component, which manages
 *   the bottom tab navigation in the app. Each tab corresponds to a major 
 *   section of the app: Home, Chats, Rent, My Ads, and Profile.
 * 
 * Author: Roopam
 * Created: Saturday, July 19, 2025
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importing screen components for each tab
import Home from '../screens/Home/Home';
import Chats from '../screens/Chats/Chats';
import Rent from '../screens/Rent/Rent';
import MyAds from '../screens/MyAds/MyAds';
import Profile from '../screens/Profile/Profile';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

/**
 * BottomTabNavigator
 * 
 * Provides persistent bottom tab navigation between the main sections of the app.
 * This ensures seamless navigation and a consistent user experience.
 * All stack headers for tab screens are hidden for a unified, app-wide navigation bar.
 * 
 * @returns {JSX.Element} The configured bottom tab navigator.
 */
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            // Global screen options: No header for tab screens
            screenOptions={{ headerShown: false }}
        >
            {/* Define each tab and the component it should render */}
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Rent" component={Rent} />
            <Tab.Screen name="MyAds" component={MyAds} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
