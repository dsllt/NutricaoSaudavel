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
import PlanItem from '../../components/plaItem';

export default function NutritionalPlan(){
  const {nutritionalPlan} = useContext(UserContext);
  const navigation = useNavigation();

  let itemByMeal = {};

  for (let item of nutritionalPlan) {
    if (!itemByMeal[item.meal]) {
      itemByMeal[item.meal] = [];
    }
    itemByMeal[item.meal].push(item);
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Plano nutricional</Text>

      {Object.entries(itemByMeal).map(([meal, items]) => {
        let capitalizedMeal = meal.charAt(0).toUpperCase() + meal.slice(1);
        return(
          <View style={styles.mealContainer}>

          <Text key={meal} style={styles.mealTitle}>{capitalizedMeal}</Text>
          {items.map(item => 
            <PlanItem key={item.id} item={item.title} quantity={item.quantity}/>
            )}
            </View>
        )})}
    </ScrollView>
  );
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
  mealContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  mealTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10
  },
});
