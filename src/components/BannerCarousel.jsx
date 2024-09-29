import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import {useState} from 'react';

const {width, height} = Dimensions.get('window');
const BannerCarousel = () => {
  const [banners, setBanners] = useState([
    'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
    'https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg',
    'https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg',
    'https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg',
  ]);
  return (
    // FlatList bileşeni kullanılarak banners state'indeki resimler dönüldü.
    <FlatList
      data={banners}
      renderItem={item => (
        <Image source={{uri: item.item}} style={styles.image} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      // snapToInterval -> kaydırma sırasında her bir kaydırmanın tam bir resime denk gelmesini sağlar. düzgün görüntü için.
      snapToInterval={width}
      // snapToAlignment -> snapToInterval ile çalışır. tam ortasında durmasını sağlar.
      snapToAlignment={'center'}
      // decelerationRate -> daha hızlı kaydırmayı ve hızlı durmasını sağlıyor.
      decelerationRate={'fast'}></FlatList>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  image: {width: width, height: height * 0.25, resizeMode: 'stretch'},
});
