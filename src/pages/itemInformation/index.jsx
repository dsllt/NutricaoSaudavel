import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function ItemInformation() {
  const navigation = useNavigation();
  const route = useRoute(); 

  const item = route.params.item;

  
  return (
    <ScrollView style={styles.container}>
      <Image source={item.image} style={styles.itemImage}/>
      <View style={styles.scroll} >
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.textKcalBold}>{item.kcal} <Text style={styles.textKcalLight}>kcal</Text></Text>
        <Text style={styles.itemSpecification}>Especificação</Text>
        <Text style={styles.itemDescription}>
          Seu sabor é levemente mais amargo do que outros tipos de alface. Pode ser incorporada a diversos pratos, já que oferece crocância e frescor a qualquer receita, de saladas a acompanhamentos.
          A alface-romana é rica nas vitaminas A e C, nutrientes antioxidantes que ajudam a prevenir doenças do coração, diabetes e envelhecimento precoce.
        </Text>
        <TouchableOpacity style={styles.itemButton} onPress={()=>navigation.goBack()}>
          <Text style={styles.itemButtonText}> Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
  },
  itemImage: {
    width: '100%',
    marginTop: 48,
    height: 350
  },
  scroll:{
    marginTop: -30,
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 40,
    borderRadius:30,
    backgroundColor: '#fbf6f3',
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 16
  },
  textKcalBold: {
    fontSize: 32,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 24
  },
  textKcalLight: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: "#8698A8"
  },
  itemSpecification: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: "#0C2F57",
    marginBottom: 16
  },
  itemDescription: {
    fontSize: 17,
    fontFamily: 'Poppins_400Regular',
    color: "#8698A8",
    marginBottom: 45
  },
  itemButton: {
    backgroundColor: '#0B7CCE',
    padding: 16,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    marginHorizontal: 30,
  },
  itemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  });
