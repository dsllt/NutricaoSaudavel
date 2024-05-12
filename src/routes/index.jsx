import { Explore, Home, Login, Profile } from "../pages";
import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';


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
      initialRouteName="Home"
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
  // const { isAuthenticated, isExpiredToken } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {/* {isExpiredToken || !isAuthenticated ? (
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      ) : ( */}
        <>
          <Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} />
        </>
      {/* )} */}
    </Stack.Navigator>
  );
}