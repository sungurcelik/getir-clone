import {useNavigation} from '@react-navigation/native';
import {Add} from 'iconsax-react-native';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../redux/actions/cartActions';

const ProductItem = ({item, addItemToCart}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {product: item})}
      style={styles.touchableOpacity}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
        <Text style={styles.oldText}>
          <Text>{'₺'}</Text>
          {item.fiyat}
        </Text>
        <Text style={styles.newText}>
          <Text>{'₺'}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={styles.productName}>{item.name} </Text>
      <Text style={styles.kgText}>{item.miktar}</Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCart(item);
        }}
        style={styles.addText}>
        <Add size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => {
      dispatch(actions.addToCart({quantity: 1, product}));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableOpacity: {
    width: width * 0.28,
    marginTop: 12,
    height: height * 0.24,
    marginLeft: 12,
    marginBottom: 6,
  },
  image: {
    width: width * 0.285,
    height: width * 0.285,
    borderRadius: 12,
    borderWidth: 0.1,
    borderColor: 'gray',
  },
  oldText: {
    fontSize: 11.4,
    color: '#747990',
    textDecorationLine: 'line-through',
  },
  newText: {
    color: '#5D3EBD',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 4,
  },
  productName: {fontStyle: 12, fontWeight: '600', marginTop: 5},
  kgText: {
    color: '#747990',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  // EMOJİ
  addText: {
    width: 30,
    height: 30,
    borderWidth: 0.3,
    flexDirection: 'row',
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    position: 'absolute',
    right: -10,
    top: -10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
  },
});
