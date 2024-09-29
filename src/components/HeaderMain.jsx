import {ArrowRight, ArrowRight2, Home, Home2} from 'iconsax-react-native';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
        />
        <View style={styles.headerOneView}>
          <Text style={{fontWeight: '600', fontSize: 16}}>Ev</Text>
          <Text style={styles.address}>
            Girne Blv. Bahçelievler Mahallesi...
          </Text>
          <ArrowRight2 size={22} color="#5C3EBC" />
        </View>
      </View>
      {/* TV Kısmı */}
      <View style={styles.headerTwo}>
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: '#5D3EBD',
            textAlign: 'center',
          }}>
          TVS
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#5D3EBD',
            textAlign: 'center',
          }}>
          13<Text style={{fontSize: 16, color: '#5D3EBD'}}>dk</Text>
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

// ***************************************** STYLES *****************************************

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    flexDirection: 'row',
    backgroundColor: '#F7D102',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerOne: {
    height: height * 0.064,
    width: '81%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  image: {
    width: 30,
    height: 30,
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
    paddingLeft: 8,
    borderLeftColor: '#F3F2FD',
    borderLeftWidth: 2,
    height: height * 0.035,
  },
  headerTwo: {
    width: '20%',
    height: height * 0.065,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingRight: 10,
  },
  address: {
    fontWeight: '500',
    fontSize: 12,
    color: '#6E7480',
    marginLeft: 6,
    marginRight: 3,
  },
});
