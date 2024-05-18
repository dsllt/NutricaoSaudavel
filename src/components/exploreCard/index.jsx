import { TouchableOpacity, Image, View, Text, StyleSheet } from 'react-native';

export default function ExploreCard({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={item.image} style={{ height: 140, width: 177 }} />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{item.item}</Text>
        <Text style={styles.quantityText}>({item.quantity})</Text>
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
