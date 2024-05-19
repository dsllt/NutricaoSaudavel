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
import { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';

export default function Explore() {
  const [search, setSearch] = useState('');
  const {nutritionalInformation} = useContext(UserContext);

  let infoByCategory = {};

  for (let item of nutritionalInformation) {
    if (!infoByCategory[item.category]) {
      infoByCategory[item.category] = [];
    }
    infoByCategory[item.category].push(item);
  }
  let infoByCategoryArray = Object.entries(infoByCategory);

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
        <TextInput           
          style={styles.input} 
          placeholder="Pesquisar" 
          value={search} 
          onChangeText={text => setSearch(text)}
        />
      </View>

      <View style={styles.cardContainer}>
      {infoByCategoryArray
        .filter(([category, items]) => 
          category.toLowerCase().includes(search.toLowerCase()) ||
          items.some(item => item.title.toLowerCase().includes(search.toLowerCase()))
        )
        .map((item, i) => 
          <ExploreCard 
            key={i} 
            item={item} 
            onPress={() => handleExploreCardPress(item)}
          />)
      }
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
