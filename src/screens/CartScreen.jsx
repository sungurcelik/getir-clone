import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import productsGetir from '../../assets/productsGetir';
import CartItem from '../components/CartItem';
import ProductItem from '../components/ProductItem';
import {connect} from 'react-redux';
import cartItems from '../redux/reducers/cartItem';

const CartScreen = ({cartItems}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          data={cartItems}
          renderItem={({item}) => <CartItem product={item.product} />}
        />
        <Text style={{padding: 15, fontWeight: 'bold', color: '#5D3EBD'}}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{backgroundColor: 'white'}}>
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View style={styles.buttonMain}>
        <TouchableOpacity style={styles.buttonTouch}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
            Devam
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonPrice}>
          <Text style={{color: '#5D3EBD', fontWeight: 'bold', fontSize: 18}}>
            ₺24,00
          </Text>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  const {cartItems} = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps, null)(CartScreen);

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonMain: {
    height: height * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f8f8f8',
  },
  buttonTouch: {
    height: height * 0.06,
    flex: 3,
    backgroundColor: '#5D3EBD',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  buttonPrice: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    height: height * 0.06,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
