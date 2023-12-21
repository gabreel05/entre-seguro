import { styled } from 'styled-components/native'
import AnimatedLottieView from 'lottie-react-native'

export const DashboardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
  text-align: center;
`

export const DashboardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #fffafa;
`

export const DashboardMessage = styled.Text`
  font-size: 16px;
  color: #000;
  margin-bottom: 16px;
  text-align: center;
`

export const DashboardButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #00e676;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`

export const DashboardButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

export const DashboardAnimation = styled(AnimatedLottieView)`
  width: 300px;
  height: 300px;
  background-color: #fffafa;
`
