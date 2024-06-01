import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function DateItem({hour, meal, status}){
  return(
    <View style={styles.dateItem}>
      <Text style={styles.hourText}>{hour.slice(0,5)}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.mealText}>{meal}</Text>
        <View style={{...styles.statusContainer, backgroundColor: status === true ? '#CBE4B4' : '#F3BABD'}}></View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  dateItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  hourText: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    width: 40,
    marginRight: 10,
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#B9BBBC',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1, 
    flexWrap: 'wrap',
  },
  mealText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
  },
  statusContainer: {
    width: 10,
    height: 10,
    borderRadius: 9999
  },
});
