import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExploreCard from '../../components/exploreCard';
import { useNavigation } from '@react-navigation/native';

const exploreItems = [
  {
    item: 'Vegetais',
    quantity: 42,
    image: require('../../../assets/images/explorar/Vegetais.png'),
  },
  {
    item: 'Frutas',
    quantity: 32,
    image: require('../../../assets/images/explorar/Frutas.png'),
  },
  {
    item: 'Pães',
    quantity: 43,
    image: require('../../../assets/images/explorar/Paes.png'),
  },
  {
    item: 'Doces',
    quantity: 12,
    image: require('../../../assets/images/explorar/Doces.png'),
  },
  {
    item: 'Massas',
    quantity: 12,
    image: require('../../../assets/images/explorar/Massas.png'),
  },
  {
    item: 'Chás',
    quantity: 12,
    image: require('../../../assets/images/explorar/Chas.png'),
  },
];

export default function Explore() {
  const navigation = useNavigation()
  function handleExploreCardPress(item){
    navigation.navigate('InformacoesNutricionais', { item: item })
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Busque por receitas ou informações nutricionais
      </Text>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="#000" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Pesquisar" />
      </View>

      <View style={styles.cardContainer}>
        {exploreItems.map((item, index) => {
          return <ExploreCard key={index} item={item} onPress={() => handleExploreCardPress(item)}/>;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 80,
    padding: 12,
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9D0E3',
    padding: 10,
    borderRadius: 27,
  },
  input: {
    flex: 1,
    marginBottom: 0,
  },
  icon: {
    marginHorizontal: 10,
  },
  cardContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
