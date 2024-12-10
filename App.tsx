import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Register } from './src/screens/register';
import { Login } from './src/screens/login';
import { Home } from './src/screens/home';


const Stack = createNativeStackNavigator();

export const App = () => {
  return (
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>

      </Stack.Navigator>
  </NavigationContainer>
   );
};


