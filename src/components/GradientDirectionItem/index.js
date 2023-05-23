// Write your code here
import {DirectionItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails} = props
  const {displayText, value} = directionDetails

  return (
    <DirectionItem>
      <DirectionButton value={value}> {displayText} </DirectionButton>
    </DirectionItem>
  )
}

export default GradientDirectionItem
