import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';

const TypeBox = ({setCat, item, active}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        styles.touchableOpacity,
        item == active
          ? {backgroundColor: '#5C3EBC'}
          : {borderColor: '#f0eff7', borderWidth: 1.3},
      ]}>
      <Text style={[styles.text, item == active && {color: 'white'}]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};
const TypeFiltering = () => {
  const [category, setCategory] = useState('Birlikte İyi Gider');
  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        (item, id) => (
          <TypeBox
            setCat={setCategory}
            item={item}
            key={id}
            active={category}
          />
        ),
      )}
    </ScrollView>
  );
};

export default TypeFiltering;

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    height: height * 0.045,
    marginRight: 12,
  },
  text: {fontSize: 12, color: '#7849F7', fontWeight: '600'},
  scrollView: {
    width: '100%',
    backgroundColor: 'white',
    height: height * 0.072,
    flexDirection: 'row',
    paddingVertical: height * 0.014,
    paddingHorizontal: 12,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
});
