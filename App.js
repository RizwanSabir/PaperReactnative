// In App.js in a new project

import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './Components/LoginPage';

import { useEffect } from 'react';
import SignUp from './Components/SignUp';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainPage from './Components/MainPage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Firebase';
import SplashScreen from './Components/SplashScreen';
const Stack = createNativeStackNavigator();

function App() {

  return (
    // <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen' >
          <Stack.Screen options={{headerShown:false}}  name="Login"  component={LoginPage} />
          <Stack.Screen options={{headerShown:false}}  name="SignUp"  component={SignUp} />
          <Stack.Screen options={{headerShown:false}}  name="SplashScreen"  component={SplashScreen} />
          <Stack.Screen    name="MainPage"  component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    // </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color of the app
  },
});

export default App;