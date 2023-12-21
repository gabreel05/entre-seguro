import styled from 'styled-components/native'

export const SignUpTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
  text-align: center;
`

export const SignUpContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #fffafa;
`

export const SignUpInput = styled.TextInput.attrs({
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

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 8px;
  background-color: #00e676;
  margin-bottom: 16px;
  justify-content: center;
  align-items: center;
`

export const SignUpButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`
