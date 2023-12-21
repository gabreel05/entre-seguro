import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { HomeContainer, HomeTitle } from './styles'

type RootStackParamList = {
  SignIn: undefined
  Dashboard: { name: string }
  Home: { name: string }
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>

type Props = {
  navigation: HomeScreenNavigationProp
  route: { params: { name: string } }
}

export default function HomeScreen({ route }: Props) {
  return (
    <HomeContainer>
      <HomeTitle>Autenticação feita com sucesso {route.params.name}.</HomeTitle>
      <HomeTitle>Te desejamos um bom trabalho!</HomeTitle>
    </HomeContainer>
  )
}
