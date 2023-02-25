import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Language from './src/screens/Language';
import OnBoarding from './src/screens/OnBoarding';
import OnboardingScreen from './src/screens/OnBoardin1';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import RNBootSplash from "react-native-bootsplash";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import DrawerNavigatorRoutes from './src/screens/DrawerNavigatorRoutes';
import Placestosee from './src/screens/Placestosee';
import Dashboard from './src/screens/Dashboard';

const stack = createNativeStackNavigator();
const tabs=createBottomTabNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <stack.Navigator initialRouteName="OnBoarding">
      <stack.Screen
        name="OnBoarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown:false,
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </stack.Navigator>
  );
};
const App = () => {
  useEffect(()=>{
     RNBootSplash.hide({fade:true});
  })
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Language"
        screenOptions={{headerShown: false}}>
        {/* <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name="Language" component={Language} /> */}
        {/* <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Signup" component={Signup} /> */}


        
        <stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/*<stack.Screen
          name="Dashboard"
          component={Dashboard}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> */}
         <stack.Screen
          name="DrawerNavigatorRoutes"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Placestosee"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Thingstodo"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
         <stack.Screen
          name="WetlandHealtAssessment"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
          <stack.Screen
          name="WaterFootprint"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
       
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
