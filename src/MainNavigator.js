import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from './screens/DashboardScreen';
import AlarmConfigScreen from './screens/AlarmConfigScreen';
import AlarmDeactivationScreen from './screens/AlarmDeactivationScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function MainNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AlarmConfig" component={AlarmConfigScreen} />
          <Stack.Screen name="AlarmDeactivation" component={AlarmDeactivationScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
