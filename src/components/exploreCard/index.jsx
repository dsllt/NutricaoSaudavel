import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';
const pictures = [
  {
    item: 'Vegetais',
    image: require('../../../assets/images/explorar/Vegetais.png'),
  },
  {
    item: 'Frutas',
    image: require('../../../assets/images/explorar/Frutas.png'),
  },
  {
    item: 'Paes',
    image: require('../../../assets/images/explorar/Paes.png'),
  },
  {
    item: 'Doces',
    image: require('../../../assets/images/explorar/Doces.png'),
  },
  {
    item: 'Massas',
    image: require('../../../assets/images/explorar/Massas.png'),
  },
  {
    item: 'Chas',
    image: require('../../../assets/images/explorar/Chas.png'),
  },
];

export default function ExploreCard({ item, onPress }) {
  let capitalizedItem = item[0].charAt(0).toUpperCase() + item[0].slice(1);
  let quantity = item[1].length
  let image = pictures.filter(item => item.item === capitalizedItem)
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image[0].image} style={{ height: 140, width: 177 }} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{capitalizedItem}</Text>
        <Text style={styles.quantityText}>({quantity})</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D9D0E3',
    borderRadius: 8,
  },
  textContainer: {
    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 12,
    color: '#8698A8',
    marginTop: 10,
  },
});
