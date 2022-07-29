import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'; 
import Register from './Register';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login2 ({navigation}) {

  const [activeTab,setActiveTab] = useState('Login');

  function switchTab(){
    if(activeTab === 'Login'){
      setActiveTab('Register');
    }else{
      setActiveTab('Login');
    }
  }

function Login() {

const [email,setEmail] =useState('');
const [password,setPassword] =useState('');
   
   const validationLogin = async() => {
     if(email .length === 0){
          Alert.alert("please enter valid  email")
     }else if(password.length === 0 ){
       Alert.alert('enter the password')
     }
     else{
        // console.log(email);
        // console.log(password); 
          const valid = await AsyncStorage.getItem('userData');
          const userToken = valid != null ? JSON.parse(valid) : null ;
  
          if(userToken.Email != email && userToken.Password != password){
            Alert.alert("enter correct details");
          }
          else{
            navigation.navigate('Home');
          }
     }
   }
  
      const forgotPassword = () => {
        Alert.alert("Check your email for link ",
        "click link below the email"
        );
      }

    return (
      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
          
          <TextInput
            style={styles.input}
            placeholder='Email'
            placeholderTextColor='#f1f2f6'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            returnKeyType='next'
            onChangeText={(value) => setEmail(value)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={false}
            textContentType='password'
            returnKeyType='done'
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => validationLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    );
  }
    return (
      <View style={styles.container}>     
      <Text style={styles.welcomeText}>
       {activeTab === 'Login' ? 'Welcome Back': 'Register'}
      </Text>
      <View style={styles.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: '#fff',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: '#fff',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Register</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Login' ? <Login /> : <Register />}
   </View>
    );
}

const styles = StyleSheet.create({

    inputView: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginTop: 10,
        marginHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        fontFamily: 'NSLight',
        paddingHorizontal: 4,
        color: '#fff',
      },
      button: {
        marginHorizontal: 20,
        backgroundColor: '#fafafa',
        marginTop: 12,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonText: {
            fontSize: 16,
             color: '#000000' 
            },
            forgotPasswordText: {
                marginHorizontal: 20,
                marginTop: 20,
                alignSelf: 'flex-end',
                color: '#fff',
                fontSize: 18,
                
              },
              container: {
                flex: 1,
                paddingTop: 40,
                backgroundColor:'#000000',
                
              },
              welcomeText: {
                alignSelf: 'center',
                fontSize: 40,
                fontFamily: 'NSLight',
                marginTop: 10,
                color: '#fff',
              },
              switchTabsView: {
                display: 'flex',
                flexDirection: 'row',
                paddingHorizontal: 20,
                marginTop: 20,
              },
              switchText: {
                padding: 2,
                fontSize: 20,
                color: '#fff',
                fontFamily: 'NSExtraBold',
              },
});