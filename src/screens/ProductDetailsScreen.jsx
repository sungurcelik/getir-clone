import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ImageCarousel from '../components/ImageCarousel';
import DetailBox from '../components/DetailBox';
import DetailProperty from '../components/DetailProperty';
import CardButton from '../components/CardButton';

const ProductDetailsScreen = props => {
  const [product, setProduct] = useState();
  useEffect(() => {
    setProduct(props.route.params.product);
  }, []);
  // console.log('ÜRÜNLER BULUNDU', props.route.params.product);
  if (!product) {
    return <ActivityIndicator color={'#5D3EBD'} />;
  }
  return (
    <View style={{flexDirection: 'row', flex: 1}}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: '#808B99',
            fontWeight: '600',
          }}>
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
