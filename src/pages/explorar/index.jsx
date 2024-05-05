import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ExplorarCard from '../../components/explorarCard';

const itensExplorar = [
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

export default function Explorar() {
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
        {itensExplorar.map((item, index) => {
          return <ExplorarCard key={index} item={item} />;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 80,
    padding: 12,
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
