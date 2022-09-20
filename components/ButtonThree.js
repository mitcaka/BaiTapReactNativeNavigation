import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function ButtonOne ({text,onPress,backgroundColor}){
    return (
        <TouchableOpacity onPress ={onPress}>
            <View style={{
                borderRadius : 25,
                paddingVertical : 14,
                paddingHorizontal : 10,
                backgroundColor :backgroundColor,
                marginBottom : 20,
                width : 250
            }}>
                <Text style = {{
                    color : 'white',
                    fontWeight: 'bold',
                    fontSize : 15,
                    textAlign: 'center'
                }}> {text}</Text>
             </View>
        </TouchableOpacity>
    )
}