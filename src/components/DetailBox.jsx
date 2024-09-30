import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailBox = ({price, name, quantity}) => {
  return (
    <View
      style={{width: '100%', backgroundColor: 'white', alignItems: 'center'}}>
      <Text
        style={{
          color: '#5D3EBD',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: 12,
        }}>
        ₺{price}
      </Text>
      <Text style={{fontWeight: '600', fontSize: 16, marginTop: 12}}>
        {name}
      </Text>
      <Text
        style={{
          color: '#848897',
          fontWeight: '600',
          marginTop: 8,
          paddingBottom: 17,
        }}>
        {quantity}
      </Text>
    </View>
  );
};

export default DetailBox;

const styles = StyleSheet.create({});
