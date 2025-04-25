import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from './DashboardScreen';
import AlarmScreen from './AlarmScreen';
// você pode adicionar mais telas aqui

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Alarmes" component={AlarmScreen} />
    </Tab.Navigator>
  );
}
