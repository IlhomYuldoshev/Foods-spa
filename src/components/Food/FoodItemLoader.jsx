import React from "react"
import ContentLoader from "react-content-loader"

const FoodItemLoader = (props) => (
  <ContentLoader
    speed={2}
    width={192}
    height={316}
    viewBox="0 0 192 316"
    backgroundColor="#1f1d2b"
    foregroundColor="#5b5757"
    {...props}
  >
    <rect x="-1" y="31" rx="16" ry="16" width="185" height="236" />
    <circle cx="89" cy="58" r="56" />
  </ContentLoader>
)

export default FoodItemLoader
