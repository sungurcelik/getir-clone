import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
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
            <Text style={{fontWeight:"bold", fontSize:15, color:"white"}}>
                Ürünler
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
