import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

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

export default function PersonalizedRecommendations(){
  const navigation = useNavigation();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Recomendações personalizadas</Text>
      <View style={styles.categoriesRecommendationsContainer}>
        <RecommendationCategories text="Sem glúten"/>
        <RecommendationCategories text="Baixo teor de sódio"/>
        <RecommendationCategories text="Rico em fibras"/>
        <RecommendationCategories text="Sem lactose"/>
      </View>
      <View style={styles.recommendations}>
        {recommendations.map(recommendation => <Recommendations title={recommendation.title} kcal={recommendation.kcal} image={recommendation.image}/>)}
      </View>

    </ScrollView>
  )
}

function RecommendationCategories({text}){
  return(
    <View style={styles.categoriesContainer}>
      <Icon name="check" size={16} color="#0359FF" />
      <Text style={styles.categoriesText}>{text}</Text>
    </View>
  )
}

function Recommendations({image, title, kcal, onPress}){
  return(
    <View style={styles.recommendationContainer}>
      <Image source={image} style={styles.recommendationImage} />
      <View style={styles.recommendationInfo}>
        <Text style={styles.recommendationTitle}>{title}</Text>
        <Text style={styles.textKcalBold}>{kcal} <Text style={styles.textKcalLight}>kcal</Text></Text>
        <TouchableOpacity style={styles.recommendationButton}>
          <Text style={styles.recommendationButtonText}>Visualizar</Text>
        </TouchableOpacity>
      </View>
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
  categoriesContainer: {
    backgroundColor: "#CBDAFF",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 8
  },
  categoriesText: {
    color: "#0359FF"
  },
  categoriesRecommendationsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 20
  },
  recommendationContainer: {
    display: 'flex',
    flexDirection: "row", 
    gap: 16,
  }, 
  recommendationInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  recommendationTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },
  recommendationImage: {},
  textKcalBold: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
  },
  textKcalLight: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: "#8698A8"
  },
  recommendations: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  recommendationButton: {
    backgroundColor: '#0B7CCE',
    padding: 16,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  recommendationButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  });