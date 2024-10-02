import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as actions from '../redux/actions/cartActions';
import {connect} from 'react-redux';
const CartItem = ({product, quantity, removeFromCart}) => {
  return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          borderBottomWidth: 0.4,
          width: width * 0.92,
          marginHorizontal: width * 0.04,
          borderBottomColor: 'lightgray',
          height: height * 0.13,
          flexDirection: 'row',
          paddingHorizontal: width * 0.04,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'lightgray',
              borderRadius: 8,
              // padding:4
            }}>
            <Image
              style={{
                width: height * 0.09,
                height: height * 0.09,
              }}
              source={{uri: product.image}}
            />
          </View>
          <View style={{marginLeft: 8}}>
            <Text
              style={{fontSize: 13, fontWeight: '600', maxWidth: width * 0.45}}>
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: '#848897',
                fontWeight: '600',
              }}>
              {product.miktar}
            </Text>
            <Text
              style={{
                color: '#5D3EBD',
                fontWeight: 'bold',
                marginTop: 6,
                fontSize: 15,
              }}>
              ₺{product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: width * 0.21,
            height: height * 0.037,
            borderColor: 'lightgray',
            borderWidth: 0.5,
            borderRadius: 10,
            shadowColor: 'gray',
            shadowOpacity: 0.4,
          }}>
          <TouchableOpacity
            onPress={() => removeFromCart(product)}
            style={{flex: 1, alignItems: 'center'}}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: '#5D3EBB',
              height: height * 0.037,
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
              {quantity}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({});
