import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function NutritionalPlan(){
  const navigation = useNavigation();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Plano nutricional</Text>

      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Café da Manhã</Text>
        <PlanItem item={"Ovo de cozido/mexido"} quantity={"2 unidades médias"}/>
        <PlanItem item={"Pão de forma integral"} quantity={"2 fatias médias"}/>
      </View>

      <View style={styles.mealContainer}>
        <Text style={styles.mealTitle}>Almoço</Text>
        <PlanItem item={"Arroz integral"} quantity={"4 colheres de sopa"}/>
        <PlanItem item={"Feijão"} quantity={"1 concha"}/>
        <PlanItem item={"Legumes"} quantity={"2 escumadeiras médias"}/>
        <PlanItem item={"Salada verde"} quantity={"A vontade"}/>
        <PlanItem item={"Fruta"} quantity={"1 unidade média"}/>
      </View>

    </ScrollView>
  );
}

function PlanItem({item, quantity}){
  return(
    <View style={styles.mealItem}>
      <Text style={styles.mealItemText}>{item}</Text>
        <Text style={styles.mealQuantityText}>{quantity}</Text>
  </View>
  )
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
  mealItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 5
  },
  mealItemText: {
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',

  },
  mealQuantityText: {
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
  },
});
