import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import AutoLogin from '../screens/AutoLogin'
import Signup from '../screens/Signup'
import Home from '../screens/Home'

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName = "Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="AutoLogin" component={AutoLogin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return(
    <NavigationContainer>
        <StackNavigator></StackNavigator>
    </NavigationContainer>
  )
}

export default MainNavigator;
