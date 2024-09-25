import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CategoryFiltering from '../components/CategoryFiltering';
import {useState} from 'react';
import TypeFiltering from '../components/TypeFiltering';

const CategoryFilterScreen = props => {
  const [category, setCategory] = useState(props.route.params.category);
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
    </ScrollView>
  );
};

export default CategoryFilterScreen;

const styles = StyleSheet.create({});
