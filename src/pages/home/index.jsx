import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home(){
  const navigation = useNavigation();
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Olá, Maria</Text>
      <Text style={styles.subtitle}>Descubra uma vida mais saudável 
através da comida</Text>
      <View style={styles.reviewContainer}>
        <Text style={styles.title}>há 22 dias</Text>
        <Text style={styles.reviewText}>com nutrientes dentro do planejado.</Text>
      </View>
      <View style={styles.tipContainer}>
        <Text style={styles.tipText}>Dica do dia</Text>
        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate('Nova Refeição')}>
        <Icon name="plus" size={16} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Nova entrada no diário alimentar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar plano nutricional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recomendações personalizadas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Fale com um profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar uma consulta</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
    padding: 28,
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  reviewContainer:{
    backgroundColor: '#E5F0DB',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  reviewTitle: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 12,
  },
  reviewText:{
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  }, 
  tipContainer: {
    backgroundColor: '#9E9BC7',
    padding: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 8
  },
  tipText: {
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
    color: 'white',
  },
  tipButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  tipButtonText: {
    fontSize: 16,
    color: '#9E9BC7',
    fontFamily: 'Poppins_500Medium',
  },
  button: {
    backgroundColor: '#333638',
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins_400Regular',
  },
  icon: {
    marginHorizontal: 10,
  },
});
