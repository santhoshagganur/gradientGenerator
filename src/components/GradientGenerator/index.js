import {Component} from 'react'
import {
  AppContainer,
  MainHeading,
  Suggestion,
  DirectionButtonsContainer,
  ColorPickerContainer,
  CustomInput,
  CustomColor,
  Div,
  GenerateGradient,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    fromColor: '#8ae323',
    toColor: '#014f7b',
    gradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  changeFromColor = event => {
    this.setState({fromColor: event.target.value})
  }

  changeToColor = event => {
    this.setState({toColor: event.target.value})
  }

  changeGradientDirection = direction => {
    this.setState({gradientDirection: direction})
  }

  changePageBackground = () => {
    const {fromColor, toColor, gradientDirection} = this.state

    this.setState({
      gradientValue: `to ${gradientDirection}, ${fromColor}, ${toColor}`,
    })
  }

  render() {
    const {gradientValue, fromColor, toColor, gradientDirection} = this.state

    return (
      <AppContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <MainHeading> Generate a CSS Color Gradient </MainHeading>
        <Suggestion> Choose Direction </Suggestion>
        <DirectionButtonsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              changeGradientDirection={this.changeGradientDirection}
              isActive={gradientDirection === each.value}
            />
          ))}
        </DirectionButtonsContainer>
        <Suggestion> Pick the Colors </Suggestion>
        <ColorPickerContainer>
          <Div>
            <CustomColor> {fromColor} </CustomColor>
            <CustomInput
              type="color"
              onChange={this.changeFromColor}
              value={fromColor}
            />
          </Div>
          <Div>
            <CustomColor> {toColor} </CustomColor>
            <CustomInput
              type="color"
              onChange={this.changeToColor}
              value={toColor}
            />
          </Div>
        </ColorPickerContainer>
        <GenerateGradient type="button" onClick={this.changePageBackground}>
          Generate
        </GenerateGradient>
      </AppContainer>
    )
  }
}

export default GradientGenerator
