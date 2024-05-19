import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function PlanItem({item, quantity}){
  return(
    <View style={styles.mealItem}>
      <Text style={styles.mealItemText}>{item}</Text>
      <Text style={styles.mealQuantityText}>{quantity}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 5
  },
  mealItemText: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',

  },
  mealQuantityText: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
  },
});
