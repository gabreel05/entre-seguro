import { useRef, useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import LottieView from 'lottie-react-native'

import {
  DashboardAnimation,
  DashboardButton,
  DashboardButtonText,
  DashboardContainer,
  DashboardMessage,
  DashboardTitle,
} from './styles'

type RootStackParamList = {
  SignIn: undefined
  Dashboard: { name: string }
  Home: { name: string }
}

type DashboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>

type Props = {
  navigation: DashboardScreenNavigationProp
  route: { params: { name: string } }
}

export default function DashboardScreen({ route, navigation }: Props) {
  const [containerDisplay, setContainerDisplay] = useState<
    'none' | 'flex' | undefined
  >('flex')
  const [animationDisplay, setAnimationDisplay] = useState<
    'none' | 'flex' | undefined
  >('none')

  const animationRef = useRef<LottieView | null>(null)

  function toggleVisibility() {
    setContainerDisplay(containerDisplay === 'none' ? 'flex' : 'none')
    setAnimationDisplay(animationDisplay === 'none' ? 'flex' : 'none')

    animationRef.current?.play()
  }

  return (
    <>
      <DashboardContainer style={{ display: containerDisplay }}>
        <DashboardTitle>Olá {route.params.name}</DashboardTitle>
        <DashboardMessage>
          Por favor, aproxime seu celular da catraca para fazermos a verificação
          da sua identidade.
        </DashboardMessage>
        <DashboardButton onPress={toggleVisibility}>
          <DashboardButtonText>ENTRAR</DashboardButtonText>
        </DashboardButton>
      </DashboardContainer>
      <DashboardContainer>
        <DashboardAnimation
          style={{ display: animationDisplay }}
          source={require('../../../assets/animation.json')}
          autoSize
          resizeMode="contain"
          loop={false}
          ref={animationRef}
          onAnimationFinish={() => {
            navigation.navigate('Home', { name: route.params.name })
          }}
        />
      </DashboardContainer>
    </>
  )
}
