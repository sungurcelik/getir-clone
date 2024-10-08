import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductItem from './ProductItem';
import productsGetir from '../../assets/productsGetir';

const ProductsContainer = () => {
  return (
    <View>
      {/* 2 Products */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {productsGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{color: 'gray', fontWeight: 'bold', padding: 14}}>
        Çubuk
      </Text>
      {/* Below Products */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: 10,
          alignItems: 'center',
        }}>
        {productsGetir.slice(2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductsContainer;

const styles = StyleSheet.create({});
