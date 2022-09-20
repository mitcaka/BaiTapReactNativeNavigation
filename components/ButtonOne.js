import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ButtonOne ({text,onPress}){
    return (
        <TouchableOpacity onPress ={onPress}>
            <View style={{
                borderRadius : 15,
                paddingVertical : 14,
                paddingHorizontal : 10,
                backgroundColor : '#3975E8',
                marginBottom : 20,
                width : 250
            }}>
                <Text style = {{
                    color : 'white',
                    fontWeight: 'bold',
                    fontSize : 17,
                    textAlign: 'center'
                }}> {text}</Text>
             </View>
        </TouchableOpacity>
    )
}