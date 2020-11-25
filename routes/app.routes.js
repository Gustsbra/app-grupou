import React, { } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard';
import Groups from '../pages/Groups'
import Disciplinas from '../pages/Disciplinas'
import Skills from '../pages/Skills'
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
        component={Groups}
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
        name="Disciplinas"
        component={Disciplinas}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={32}
              />
            )
          }
        }
      />

      <Tab.Screen
        name="Skills"
        component={Skills}
        options={
          {
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="puzzle-outline"
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