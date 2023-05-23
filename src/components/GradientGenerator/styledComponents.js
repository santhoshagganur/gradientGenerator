// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  font-family: 'Roboto';
`

export const Suggestion = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Roboto';
`

export const DirectionButtonsContainer = styled.ul`
  display: flex;
`

export const ColorPickerContainer = styled.div`
  display: flex;
`

export const CustomInput = styled.input`
  border-width: none;
  height: 60px;
  width: 150px;
`

export const CustomColor = styled.p`
  color: #ffffff;
  font-size: 16px;
`

export const Div = styled.div`
  margin-right: 30px;
`

export const GenerateGradient = styled.button`
  background-color: #00c9b7;
  border-width: 0;
  color: #1e293b;
  font-size: 14px;
  padding: 10px;
  margin: 50px;
`
