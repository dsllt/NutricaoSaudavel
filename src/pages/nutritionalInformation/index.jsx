import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import ItemInfoCard from '../../components/itemInfoCard';

export default function NutritionalInformation(){
  const navigation = useNavigation()

  const route = useRoute(); 

  const item = route.params.item;
  let capitalizedItem = item[0].charAt(0).toUpperCase() + item[0].slice(1);

  function handleItemPress(item){
    navigation.navigate('InformacaoDeItem', {item: item})
  }

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{capitalizedItem}</Text>
      <View style={styles.itemsContainer}>
      {item[1].map((recommendation, index) => <ItemInfoCard key={index} title={recommendation.title} kcal={recommendation.kcal} image={recommendation.image} onPress={()=>{handleItemPress(recommendation)}}/>)}
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
    height: '100%'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginTop: 40,
  },
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
});
