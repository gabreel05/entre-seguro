import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../Screens/SignIn'
import DashboardScreen from '../Screens/Dashboard'
import HomeScreen from '../Screens/Home'
import SignUpScreen from '../Screens/SignUp'

type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Dashboard: { name: string }
  Home: { name: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
