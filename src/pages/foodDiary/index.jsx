import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import DateItem from '../../components/dateItem';

export default function FoodDiary(){
  const {meals} = useContext(UserContext);

  let mealsByDate = {};

  for (let meal of meals) {
    let date = meal.date.split('T')[0]; 
    if (!mealsByDate[date]) {
      mealsByDate[date] = [];
    }
    mealsByDate[date].push(meal);
  }
  let mealsByDateArray = Object.entries(mealsByDate);

  mealsByDateArray.sort((a, b) => new Date(b[0]) - new Date(a[0]));

  let sortedMealsByDate = Object.fromEntries(mealsByDateArray);

  const navigation = useNavigation();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Diário Alimentar</Text>
      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('NovaRefeicao')}>
      <Icon name="plus" size={20} color="#fff" />
        <Text style={styles.registerButtonText}>Nova Refeição</Text>
      </TouchableOpacity>

      <View style={styles.dateContainer}>
      {Object.entries(sortedMealsByDate).map(([date, meals]) => {
        let dateObj = new Date(date);
        let formattedDate = dateObj.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }).replace(/\//g, '.');
        return(
          <>
          <Text key={formattedDate} style={styles.dateText}>{formattedDate}</Text>
          {meals.map(meal => 
            <DateItem key={meal.id} hour={meal.time} meal={meal.title} status={meal.is_in_diet}/>
            )}
          </>
        )})}
      </View>

    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
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
});
