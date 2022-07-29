import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardType,
  Alert
} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}) {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

  const setData = async() => {
  if(name.length === 0 || email.length === 0 || password === 0 || phone === 0 ){
      Alert.alert("please fill the all the details");
   } else{
        try {
          var user={
            Name: name,
            Email: email,
            Phone:phone,
            Password: password,
          }
          await AsyncStorage.setItem('userData',JSON.stringify(user));
       //  navigation.navigate('Login');
        } catch (error) {
          console.log(error);
        }
    }
  }
 
const getData = async() => {
  try{
    const jsonValue =await AsyncStorage.getItem('userData');
    console.log(jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }
 catch(error){
   console.log(error);
 }

}
const removeData = async() => {
  try{
    const jsonValue = await AsyncStorage.removeItem('userData');
  //  console.log(AsyncStorage.getData('userData'));
  
  }
 catch(error){
   console.log(error);
 }

}
 
    return (

      <View style={{ marginTop: 10 }}>
        <View style={styles.inputView}>
        
          <TextInput
            style={styles.input}
            placeholder='Full Name'
            placeholderTextColor='#f1f2f6'
            textContentType='name'
            autoCompleteType='name'
            returnKeyType='next'
            onChangeText={(value) => setName(value)}
          />
        </View>
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
            placeholder='Phone'
            placeholderTextColor='#f1f2f6'
            keyboardType='phone-pad'
            returnKeyType='next'
            onChangeText={(value) => setPhone(value)}
          />
         
        </View>
        <View style={styles.inputView}>
          
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={true}
            textContentType='password'
            returnKeyType='done'
            onChangeText={(value) => setPassword(value)}
          />

        </View>
        <TouchableOpacity style={styles.button} onPress={() => setData()}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getData()}>    
          <Text style={styles.Account}>Already Having Account? Login Above </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeData()}>    
          <Text style={styles.Account}>remove data</Text>
          </TouchableOpacity>
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
            Account: {
                marginHorizontal: 20,
                marginTop: 20,
                alignSelf: 'center',
                color: '#fff',
                fontSize: 18,
                
              },
});