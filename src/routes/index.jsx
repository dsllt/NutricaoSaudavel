import { Configuration, CreateMeal, DailyTip, EditProfile, Explore, FoodDiary, Help, Home, ItemInformation, Login, NutritionalInformation, NutritionalPlan, PersonalizedRecommendations, Profile, ScheduleAppointment, TalkToAProfessional } from "../pages";
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import { AuthContext } from "../context/authContext";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeNavigator() {
  const tabBarActiveTintColor = '#0359FF';
  const tabBarInactiveTintColor = '#8698A8';
  const tabBarStyle = {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 35,
    paddingRight: 35,
    height: 77,
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={{
        headerShown: false,
        activeTintColor: '#EB4A3B',
        inactiveTintColor: 'black',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Icon size={24} name="home" color={color} />,
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explore}
        options={{
          tabBarIcon: ({ color }) => <Icon size={24} name="search" color={color} />,
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <Icon size={24} name="user" color={color} />,
          tabBarActiveTintColor,
          tabBarInactiveTintColor,
          tabBarStyle,
        }}
      />
    </Tab.Navigator>
  );
}


export default function Routes() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <Stack.Navigator>
      { !isAuthenticated ? (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      ) : (
        <>
          <Stack.Screen name="HomeNavigator" component={HomeNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="NovaRefeicao" component={CreateMeal} options={{ headerShown: false }} />
          <Stack.Screen name="DiarioAlimentar" component={FoodDiary} options={{ headerShown: false }} />
          <Stack.Screen name="PlanoNutricional" component={NutritionalPlan} options={{ headerShown: false }} />
          <Stack.Screen name="Recomendacoes" component={PersonalizedRecommendations} options={{ headerShown: false }} />
          <Stack.Screen name="FaleComProfissional" component={TalkToAProfessional} options={{ headerShown: false }} />
          <Stack.Screen name="AgendarConsulta" component={ScheduleAppointment} options={{ headerShown: false }} />
          <Stack.Screen name="InformacoesNutricionais" component={NutritionalInformation} options={{ headerShown: false }} />
          <Stack.Screen name="InformacaoDeItem" component={ItemInformation} options={{ headerShown: false }} />
          <Stack.Screen name="DicaDoDia" component={DailyTip} options={{ headerShown: false }} />
          <Stack.Screen name="EditarPerfil" component={EditProfile} options={{ headerShown: false }} />
          <Stack.Screen name="Configuracoes" component={Configuration} options={{ headerShown: false }} />
          <Stack.Screen name="Ajuda" component={Help} options={{ headerShown: false }} />
        </>
      )}
    </Stack.Navigator>
  );
}