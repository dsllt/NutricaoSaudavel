import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserContext } from '../../context/userContext';
import { useNavigation } from '@react-navigation/native';


export default function DateItem({hour, meal, status, id}){
  const {meals, setMeals} = useContext(UserContext);
  const navigation = useNavigation();
  const mealN = meals.filter(meal => meal.id === id)

  const [displayEdit, setDisplayEdit] = useState(false);
  const [h, m, s] = hour.split(':');
  const formattedHour = `${h.padStart(2, '0')}:${m.padStart(2, '0')}`;

  function handleShowButtons(){
    setDisplayEdit(prevState => !prevState);
console.log(mealN)

  }

  function handleEdit(){
    navigation.navigate("EditarRefeicao", {
      id
    })
    setDisplayEdit(false);
  }

  async function handleDelete(){
    const response = await fetch(`http://0.0.0.0:8080/diary/${id}`, {
      method: 'DELETE',
    });
    const meals = await response.json();

    if(meals.message === 'Diary deleted successfully'){
      setMeals(prevState => prevState.filter(meal => meal.id !== id))
    }
    setDisplayEdit(false);
  }

  return(
    <TouchableOpacity style={styles.dateItem} onLongPress={handleShowButtons} >
      <Text style={styles.hourText}>{formattedHour}</Text>
      <View style={styles.itemInfo}>
        <Text style={styles.mealText}>{meal}</Text>
        <View style={{...styles.statusContainer, backgroundColor: status === true ? '#CBE4B4' : '#F3BABD', marginRight: displayEdit ? 60 : 0}}></View>
        <View style={{ ...styles.editContainer, display: displayEdit ? 'flex' : 'none'}}>
          <TouchableOpacity onLongPress={handleEdit}><Icon name="pencil" size={20} color="#000" /></TouchableOpacity>
          <TouchableOpacity onLongPress={handleDelete}><Icon name="trash-outline" size={20} color="#F3BABD" /></TouchableOpacity>
        </View>

      </View>
  </TouchableOpacity>
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
  editContainer: {
    flexDirection: 'row',
    gap: 5, 
    position: 'absolute', 
    right: 0
  }
});
