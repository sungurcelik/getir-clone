import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CardButton = () => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: 'center',
        width: '100%',
        height: height * 0.11,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: height * 0.06,
          width: '90%',
          marginTop: -10,
          backgroundColor: '#5D39C1',
          marginHorizontal: '5%',
          borderRadius: 8,
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});