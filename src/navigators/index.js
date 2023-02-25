import React, { useEffect, useState } from "react";
import { BackHandler, Alert } from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetailsAction } from '../store/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from "react-native-bootsplash";
import UnAuth from './publicAuth';
import Auth from './privateAuth';

export const navigatorRef = createNavigationContainerRef()

const Navigator = () => {
  const dispatch = useDispatch()
  const userdetails = useSelector(state => state.user.userDetails)
  useEffect(() => {
    AsyncStorage.getItem('email').then(value => {
      dispatch(getUserDetailsAction(value))
      setTimeout(() => {
        RNBootSplash.hide({fade:true});
      }, 1000);
    });
  }, []);

  const routeNameRef = React.useRef();

  useEffect(() => {
    const backAction = () => {
      if (routeNameRef.current == 'Dashboard' || routeNameRef.current == 'Login') {
        Alert.alert("Hold on!", "Are you sure you want to go back?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer ref={navigatorRef}
      onReady={() => {
        routeNameRef.current = navigatorRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigatorRef.current.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}>
        
      {userdetails ? <Auth /> : <UnAuth />}
    </NavigationContainer>
  )
};

export default Navigator;