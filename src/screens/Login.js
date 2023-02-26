import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
 } from 'react-native';

const Login=({navigation}) => {
    return(
        <View style={{flex:3}}>
            <View style={{alignItems:'center'}}>
                <Image source={require('../assets/images/main_logo.png')}
                    style={{resizeMode:'cover',marginTop:40}} />
            </View>

            <View style={{height:"40%",margin:15}}>
                <Text style={{color:"black",textAlign:'left',paddingLeft:20}}>
                    Email
                </Text>
                <View 
                        style={{borderWidth:1,borderColor:'#086C30',
                                marginLeft:10,marginRight:10,marginTop:10
                                ,borderRadius:5}}>
                    <TextInput placeholder="Enter Email Address"
                                keyboardType="email-address"
                                placeholderTextColor="#a5a7ab"  />
                </View>


                <Text style={{
                        color:"black",textAlign:'left',paddingLeft:20,marginTop:10
                                }}>
                    Password
                </Text>
                <View style={{borderWidth:1,borderColor:'#086C30',
                                marginLeft:10,marginRight:10,marginTop:10
                                ,borderRadius:5}}>
                    <TextInput placeholder="Enter Password"
                                keyboardType="email-address"
                                placeholderTextColor="#a5a7ab"  />
                </View>
                
                <TouchableOpacity style={{
                    backgroundColor:"#086C30",margin:15,height:'18%',justifyContent:'center',
                    borderRadius:10,marginTop:30
                    }}>
                    <Text style={{textAlign:'center',fontWeight:'250',color:'#fff'}}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center'}}>
                    <Text style={{color:"#086C30",textAlign:'center'}}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={{
                height:'15%',flexDirection:'row',justifyContent:'center',
                marginTop:15,marginLeft:55}}>
                    <View>
                        <Text style={{color:'black'}}>
                             Dont have an account ?
                        </Text>
                    </View>
                   
                    <TouchableOpacity style={{flex:1,paddingLeft:5}}
                        onPress={()=>navigation.navigate("Signup")}>
                        <Text style={{color:'black'}}>
                             Signup
                        </Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
           
          
            
        </View>
    )
};

export default Login;

