import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {ArrowDown2} from 'iconsax-react-native';

const DetailProperty = () => {
  const [details, setDetails] = useState([
    'Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti',
    'İçindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek Bilgiler',
  ]);
  const TextComponent = ({detail, index}) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: index === 0 ? '#4E4E4E' : '#687482',
            fontSize: index === 0 ? 10.5 : 13,
            fontWeight: index === 0 ? '400' : '500',
          }}>
          {detail}
        </Text>
        {index !== 0 && <ArrowDown2 color="#9f9f9f" />}
      </View>
    );
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default DetailProperty;

const styles = StyleSheet.create({});
