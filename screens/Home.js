import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { AsyncStorage } from 'react-native';



export default function Home({navigation}) {
  const logout= async() => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  }   
  return (
    <View style={styles.container}>
        <Text>Đăng nhập thành công</Text>
        <Button onPress = {logout} title ="Logout"/>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flex :1 ,
        backgroundColor : '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});