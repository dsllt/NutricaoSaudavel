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
const recommendations = [
  {
    title: 'Tapioca',
    kcal: 300,
    image: require('../../../assets/images/recommendations/Tapioca.png'),
  },
  {
    title: 'Overnight Oats',
    kcal: 350,
    image: require('../../../assets/images/recommendations/Oats.png'),
  },
  {
    title: 'Risoto Vegano',
    kcal: 580,
    image: require('../../../assets/images/recommendations/RisotoVegano.png'),
  },


];
export default function NutritionalInformation(){
  const navigation = useNavigation()

  const route = useRoute(); 

  const item = route.params.item;

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{item.item}</Text>
      <View style={styles.itemsContainer}>
      {recommendations.map((recommendation, index) => <ItemInfoCard key={index} title={recommendation.title} kcal={recommendation.kcal} image={recommendation.image}/>)}
      {recommendations.map((recommendation, index) => <ItemInfoCard key={index} title={recommendation.title} kcal={recommendation.kcal} image={recommendation.image}/>)}
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
  itemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
});
