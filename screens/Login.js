import {Text, View,Image} from 'react-native';
import ButtonOne from '../components/ButtonOne'
import ButtonTwo from '../components/ButtonTwo'
import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    const {navigation} = this.props;
    return (
        <View style = {{
            backgroundColor : 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Image style = {{
            width : 100,
            height : 100,
            marginStart : 10,
            marginEnd : 5,
        }}
            source = {require('../assets/icon_fire.png')} 
        />
        <Text style={{
            color : '#3975E8',
            fontSize : 30,
            marginBottom : 5
        }}>Welcome to your </Text>
        <Text style={{
            textAlign : 'center',
            marginBottom : 20
        }}>Welcome to your app. Build your own social network in minutes</Text>
        <ButtonOne text = 'Log in'
            onPress = {()=>{navigation.navigate('AutoLogin')}}
        />
        <ButtonTwo text = 'Sign up'
            onPress = {()=>{navigation.navigate('Signup')}}
        />
        </View>
    )
  }
}

