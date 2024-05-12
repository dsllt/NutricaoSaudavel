import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function FoodDiary(){
  const navigation = useNavigation();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Diário Alimentar</Text>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Nova Refeição')}>
      <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.registerButtonText}>Nova Refeição</Text>
      </TouchableOpacity>

      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>12.04.24</Text>
        <DateItem hour={"20:00"} meal={"Omelete"} status={"no"}/>
        <DateItem hour={"16:00"} meal={"Whey protein com leite"} status={"yes"}/>
        <DateItem hour={"12:30"} meal={"Salada cesar com frango grelhado"} status={"yes"}/>
        <DateItem hour={"09:30"} meal={"Vitamina de banana com abacate"} status={"yes"}/>
      </View>

    </ScrollView>
  );
}

function DateItem({hour, meal, status}){
  return(
    <View style={styles.dateItem}>
      <Text style={styles.hourText}>{hour}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.mealText}>{meal}</Text>
        <View style={{...styles.statusContainer, backgroundColor: status === 'yes' ? '#CBE4B4' : '#F3BABD'}}></View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 80,
    padding: 28,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginTop: 40,
  },
  registerButton: {
    backgroundColor: '#0B7CCE',
    padding: 16,
    width: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  dateText: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
  },
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
