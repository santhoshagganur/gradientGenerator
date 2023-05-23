// Write your code here
import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, changeGradientDirection, isActive} = props
  const {displayText, value} = directionDetails

  const changeDirection = () => {
    changeGradientDirection(value)
  }

  return (
    <DirectionItem>
      <DirectionButton
        isActive={isActive}
        value={value}
        onClick={changeDirection}
      >
        {displayText}
      </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
