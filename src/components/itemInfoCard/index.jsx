import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";

export default function ItemInfoCard({image, title, kcal, onPress}) {
  return(
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.textKcalBold}>{kcal} <Text style={styles.textKcalLight}>kcal</Text></Text>
        <TouchableOpacity style={styles.itemButton} onPress={onPress}>
          <Text style={styles.itemButtonText}>Visualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: "row", 
    gap: 16,
  }, 
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  itemImage: {},
  textKcalBold: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
  },
  textKcalLight: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: "#8698A8"
  },
  recommendations: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  itemButton: {
    backgroundColor: '#0B7CCE',
    padding: 16,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  itemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  });
