import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import {CloseCircle, Heart} from 'iconsax-react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';

const Stack = createNativeStackNavigator();
function MyStack({navigation, route}) {
  const tabHiddenRoutes = ['ProductDetails'];
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'block'}});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Image
              source={require('../../assets/getirlogo.png')}
              style={{width: 70, height: 30}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: '#5C3EBC'},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Ürünler
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#5C5EBC'},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                paddingLeft: 8,
              }}>
              <CloseCircle size={24} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 8}}>
              <Heart variant="Bold" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({navigation, route}) {
  return <MyStack navigation={navigation} route={route} />;
}

const styles = StyleSheet.create({});
