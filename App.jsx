import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator';
// tüm log, uyarı ve hata mesajlarını gizler
import {LogBox} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreAllLogs();

const App = () => {
  const linking = {
    prefixes: ['myapp://'],
    config: {
      screens: {
        CartScreen: 'cartscreen',
      },
    },
  };
  //xcrun simctl openurl booted "myapp://CartScreen"
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
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
