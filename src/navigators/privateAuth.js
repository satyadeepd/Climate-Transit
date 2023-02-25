import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import TabNavigation from '../components/TabNavigation';

// import Home from '../screens/Home';


import { navigatorRef } from '../navigators';

import colors from "../misc/colors";

const Stack = createNativeStackNavigator();

const Auth = () => {
    const [loading,setLoading] = useState(false)
    return (
        <>
            <Stack.Navigator initialRouteName="Dashboard" screenListeners={{
                    state: (e) => {
                        setLoading(!loading)
                        const routes = navigatorRef.getState()?.routes;
                        if(routes && routes?.length){
                            const prevRoute = routes[routes?.length - 1];
                            const name = navigatorRef.getCurrentRoute()?.name
                            if(name == 'Dashboard' && prevRoute.name != name){
                                navigatorRef.reset({index: 0,routes: [{ name }]})
                            }
                        }
                    },
                }}>
                {/* <Stack.Screen name="Dashboard" component={Home} options={{ headerShown: false }} /> */}
                
                
             
            </Stack.Navigator>
            <TabNavigation loading={loading}/>
        </>
    )
};

export default Auth;