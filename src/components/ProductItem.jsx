import {Add} from 'iconsax-react-native';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-svg';
const {width, height} = Dimensions.get('window');
const ProductItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.touchableOpacity}>
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
      <View style={styles.addText}>
        <Add size={22} color="#5D3EBD" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  touchableOpacity: {
    width: width * 0.28,
    marginTop: 12,
    height: height * 0.24,
    marginLeft: 12,
    marginBottom: 6,
  },
  image: {
    width: width * 0.3,
    height: width * 0.28,
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
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    position: 'absolute',
    right: -6,
    top: -6,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 3.8,
    shadowOpacity: 0.05,
  },
});
