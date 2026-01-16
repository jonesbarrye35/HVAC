import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MapPin, ClipboardList, User, Settings as SettingsIcon } from 'lucide-react-native';

import JobsScreen from './src/screens/JobsScreen';
import JobDetailsScreen from './src/screens/JobDetailsScreen';

// Placeholder Screens
const HistoryScreen = () => <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Service History</div>;
const ProfileScreen = () => <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>Profile</div>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function JobStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#0f172a' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}
        >
            <Stack.Screen name="Today's Jobs" component={JobsScreen} />
            <Stack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: 'Job Details' }} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        if (route.name === 'Tasks') return <ClipboardList color={color} size={size} />;
                        if (route.name === 'History') return <MapPin color={color} size={size} />;
                        if (route.name === 'Profile') return <User color={color} size={size} />;
                        return <SettingsIcon color={color} size={size} />;
                    },
                    tabBarActiveTintColor: '#3b82f6',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: { backgroundColor: '#ffffff', borderTopWidth: 1, borderTopColor: '#e2e8f0', paddingBottom: 5, paddingTop: 5 },
                    headerShown: false
                })}
            >
                <Tab.Screen name="Tasks" component={JobStack} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
