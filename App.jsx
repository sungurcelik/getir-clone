import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator/>
      {/* <View style={styles.container}>
        <HomeScreen />
      </View> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: '15%',
  },
});
