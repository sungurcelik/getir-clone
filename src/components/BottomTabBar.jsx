import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from '../navigators/HomeNavigator';
import {Firstline, Gift, Home, SearchNormal1, User} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children}) => {
  return (
    <TouchableOpacity
      style={{
        width: 55,
        height: 55,
        backgroundColor: '#5C3EBC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        marginTop: -10,
        borderWidth: 2,
        borderColor: 'white',
      }}>
      <Firstline size={32} color="#FFD00C" />
    </TouchableOpacity>
  );
};

const {width, height} = Dimensions.get('window');

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5C3EBC',
        tabBarInactiveTintColor: '#959595',
        headerShown: false,
        tabBarStyle: {
          height: height * 0.086,
        },
      }}>
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Home size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <SearchNormal1 size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarIcon: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <User size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Gift size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({});
