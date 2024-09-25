import {ScrollView, StyleSheet} from 'react-native';
import HeaderMain from '../components/HeaderMain';
import BannerCarousel from '../components/BannerCarousel';
import MainCategories from '../components/MainCategories';

const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;

// ***************************************** STYLES *****************************************

const styles = StyleSheet.create({});
