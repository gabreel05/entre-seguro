import styled from 'styled-components/native'

export const SignInTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
  text-align: center;
`

export const SignInContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #fffafa;
`

export const SignInInput = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #ebebeb;
  margin-bottom: 16px;
  padding-left: 16px;
  color: #333;
`

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #00e676;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`

export const SignInButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`

export const SignInDontHaveAccountButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
  background-color: #fffafa;
`

export const SignInDontHaveAccountText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`
