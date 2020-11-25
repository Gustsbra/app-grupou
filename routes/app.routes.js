import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard';
import Chat from '../pages/Chat';
import Groups from '../pages/Groups'
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={
        {
          activeTintColor: 'tomato',
          inactiveTintColor: '#ccc'
        }
      }
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="view-dashboard"
                color={color}
                size={32}
              />
            )
          }
        }
      />
      <Tab.Screen
        name="Grupos"
        component={Chat}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-group"
                color={color}
                size={32}
              />
            )
          }
        }
      />
      <Tab.Screen
        name="Perfil"
        component={Settings}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-settings"
                size={32}
                color={color}
              />
            )
          }
        }
      />
    </Tab.Navigator>

  )
}

export default AppRoutes;