import {Text, View,Image} from 'react-native';
import ButtonThree from '../components/ButtonThree'
import MyInput from '../components/MyInput'
import React, { Component,useState } from 'react'
import { AsyncStorage } from 'react-native';

export default function Autologin({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState(null)
    const onSubmit = async() => {
        await AsyncStorage.setItem('token',username);
        if(username === 'mitcaka' && password === '123456'){
            console.log("Oke");
            navigation.navigate('Home');
        }else{
            console.log("Error");
        }
    }

    const tokenlogin = async() => {
        const value  = await AsyncStorage.getItem('token');
        if(value !== null){
            navigation.navigate('Home');
        }else{

        }
    }
    return (
        <View style = {{
            backgroundColor : 'white',
            flex: 1,
        }}>

            <Text style={{
                color : '#3975E8',
                fontSize : 30,
                marginBottom : 5
            }}> Sign in</Text>
        <View style = {{
            backgroundColor : 'white',
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <MyInput placeholder='Email or Phone Number' keyboardType='text' onChangeText = {(value) =>setUsername(value)}/>
            <MyInput placeholder='Password' secure={true} onChangeText = {(value) =>setPassword(value)}/>
            <ButtonThree text = 'Log in' backgroundColor = '#3975E8' onPress = {onSubmit}/>
            <Text style = {{
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom : 20
            }}> OR </Text>
            <ButtonThree text = 'Sign in' backgroundColor = '#3B5998' onPress = {()=>{navigation.navigate('Signup')}}/>
            {/* <Text>Username : {username}</Text>
            <Text>Password : {password}</Text> */}
        </View>
    
        </View>
    )
}
