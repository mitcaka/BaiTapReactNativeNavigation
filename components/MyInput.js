import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View,TextInput} from 'react-native';

export default function MyInput ({placeholder,secure,onChangeText}){
    return (
        <TextInput
        style={{
            placeholderTextColor : 'gray',
            borderRadius : 30,
            borderWidth : 1, 
            borderColor : 'gray',
            width : 350,
            height: 40,
            padding: 10,
            marginBottom: 15,
            paddingHorizontal: 15,
            fontSize : 20,       
        }}
        placeholder={placeholder}
        keyboardType= 'default'
        secureTextEntry={secure}
        onChangeText = {onChangeText}
      />
    )
}