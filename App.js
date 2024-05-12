import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CreateMeal, Explore, Home, Login, Profile } from './src/pages';

import {  useFonts, Poppins_500Medium, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    // <Login/>
    // <Explore />
    // <Home />
    // <Profile />
    <CreateMeal />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
