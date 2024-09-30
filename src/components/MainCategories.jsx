import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CategoryItem from './CategoryItem';
import categoriesGetir from '../../assets/categoriesGetir';

const MainCategories = () => {
  const [categories, setCategories] = useState(categoriesGetir);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map(item => {
          return <CategoryItem key={item.id} item={item} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default MainCategories;
