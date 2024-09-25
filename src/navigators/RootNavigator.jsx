import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import {Firstline, Gift, Home, SearchNormal1, User} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const CustomTabBarButton = ({children}) => {
    return (
      <TouchableOpacity
        style={{
          width: 58,
          height: 58,
          backgroundColor: '#5C3EBC',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 33,
          marginTop: -8,
          borderWidth: 3,
          borderColor: 'white',
        }}>
        <Firstline size={32} color="#FFD00C" />
      </TouchableOpacity>
    );
  };

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
          height: 80,
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

export default RootNavigator;

const styles = StyleSheet.create({});
