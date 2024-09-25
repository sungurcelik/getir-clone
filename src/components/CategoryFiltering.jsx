import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import categoriesGetir from '../../assets/categoriesGetir';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');

const CategoryBox = ({item, active}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: 'row',
          alignItems: 'center',
        },
        item.name == active.name && {borderBottomColor: '#FFD00C', borderBottomWidth:2.5},
      ]}>
      <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({category}) => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      style={{
        width: '100%',
        backgroundColor: '#7849F7',
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}>
      {categories.map(item => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;

const styles = StyleSheet.create({});
