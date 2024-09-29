import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CategoryItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoryDetails', {category: item})}
      style={styles.touchableOpacity}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 8}}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{fontSize: 12, color: '#616161', fontWeight: '500'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableOpacity: {
    width: width * 0.25,
    height: width * 0.24,
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
