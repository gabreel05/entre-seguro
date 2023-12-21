import { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import {
  SignInButton,
  SignInButtonText,
  SignInContainer,
  SignInDontHaveAccountButton,
  SignInDontHaveAccountText,
  SignInInput,
  SignInTitle,
} from './styles'

type RootStackParamList = {
  SignIn: undefined
  SignUp: undefined
  Dashboard: { name: string }
}

type SignInScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Dashboard' | 'SignUp'
>

type Props = {
  navigation: SignInScreenNavigationProp
}

export default function SignInScreen({ navigation }: Props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    navigation.navigate('Dashboard', { name: username })
  }

  function handleSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <SignInContainer>
      <SignInTitle>Bem-vindo ao EntreSeguro!</SignInTitle>

      <SignInInput
        value={username}
        onChangeText={username => setUsername(username)}
        placeholder="Nome de usuário"
      />
      <SignInInput
        value={password}
        onChangeText={password => setPassword(password)}
        placeholder="Senha"
      />

      <SignInButton onPress={handleSignIn}>
        <SignInButtonText>ENTRAR</SignInButtonText>
      </SignInButton>

      <SignInDontHaveAccountButton onPress={handleSignUp}>
        <SignInDontHaveAccountText>
          Não tem uma conta? Cadastre-se!
        </SignInDontHaveAccountText>
      </SignInDontHaveAccountButton>
    </SignInContainer>
  )
}
