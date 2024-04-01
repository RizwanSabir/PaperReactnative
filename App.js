// In App.js in a new project

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


;

import QuranSearch from './Components/QuranSearch';
const Stack = createNativeStackNavigator();

function App() {

  return (
    // <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='QuranSearch' >
        
          <Stack.Screen  name="QuranSearch" options={{headerShown:false}}  component={QuranSearch} />
         
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