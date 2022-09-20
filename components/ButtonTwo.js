import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ButtonOne ({text,onPress}){
    return (
        <TouchableOpacity onPress ={onPress}>
            <View style={{
                borderRadius : 15,
                paddingVertical : 14,
                paddingHorizontal : 10,
                backgroundColor : 'white',
                borderColor: '#3975E8',
                borderWidth : 1,
                width : 250
            }}>
                <Text style = {{
                    color : '#3975E8',
                    fontWeight: 'bold',
                    fontSize : 17,
                    textAlign: 'center'
                }}> {text}</Text>
             </View>
        </TouchableOpacity>
    )
}