import React, { useState } from 'react';
import UserLogInScreen from './UserLogInScreen';
import UserForgotScreen from './UserForgotScreen';
import UserSignupScreen from './UserSignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserLogIn">
        <Stack.Screen name="UserLogIn" component={UserLogInScreen} />
        <Stack.Screen name="UserForgot" component={UserForgotScreen} />
        <Stack.Screen name="UserSignup" component={UserSignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;