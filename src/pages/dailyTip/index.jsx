import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default function DailyTip() {
  const navigation = useNavigation();
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Dica do dia</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.tipText}>Beba mais água</Text>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbf6f3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 80,
    padding: 28,
    flex: 1
  },
  title: {
    fontSize: 30,
    fontFamily: 'Poppins_700Bold',
    marginTop: 40,
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  tipText: {
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
  }
});
