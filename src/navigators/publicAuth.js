import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from "../screens/Signup";
// import OnboardingScreen from "../screens/OnBoardin1";

const Stack = createNativeStackNavigator();

const UnAuth = () => {
  return (
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}} /> */}
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </Stack.Navigator> 
  )
};

export default UnAuth;