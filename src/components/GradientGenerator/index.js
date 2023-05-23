import {Component} from 'react'
import {
  AppContainer,
  MainHeading,
  Suggestion,
  DirectionButtonsContainer,
  ColorPickerContainer,
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
  render() {
    return (
      <AppContainer>
        <MainHeading> Generate a CSS Color Gradient </MainHeading>
        <Suggestion> Choose Direction </Suggestion>
        <DirectionButtonsContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
            />
          ))}
        </DirectionButtonsContainer>
        <Suggestion> Pick the Colors </Suggestion>
        <ColorPickerContainer>
          <div>
            <input type="color" />
          </div>
        </ColorPickerContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
