import { useState } from 'react'

import {
  SignUpButton,
  SignUpButtonText,
  SignUpContainer,
  SignUpInput,
  SignUpTitle,
} from './styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Dashboard: { name: string }
}

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>

type Props = {
  navigation: SignInScreenNavigationProp
}

export default function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignUp() {
    navigation.navigate('SignIn')
  }

  return (
    <SignUpContainer>
      <SignUpTitle>Cadastre-se no EntreSeguro!</SignUpTitle>

      <SignUpInput
        value={email}
        onChangeText={email => setEmail(email)}
        placeholder="E-mail"
      />
      <SignUpInput
        value={username}
        onChangeText={username => setUsername(username)}
        placeholder="Nome de usuário"
      />
      <SignUpInput
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder="Senha"
      />

      <SignUpButton onPress={handleSignUp}>
        <SignUpButtonText>CADASTRAR</SignUpButtonText>
      </SignUpButton>
    </SignUpContainer>
  )
}
