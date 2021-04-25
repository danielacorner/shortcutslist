import React, { useState } from "react"
import styled from "styled-components/macro"
import { animated, useSpring } from "react-spring"
import { useWindowSize } from "../../../utils/hooks"

const PADDING = 6
const MAX_GIF_WIDTH = 900
const BREAKPOINT_SHRINK = 630

/** small gif preview that expands on hover */
export default function ExpandableGif({
  pathToGif,
  isHoveredRow,
  isHoveredImg: isHovered,
  setIsHoveredImg: setIsHovered,
}) {
  const windowSize = useWindowSize()

  const shouldShrink = windowSize.width < BREAKPOINT_SHRINK
  const smallGifWidth = shouldShrink ? 64 : 104
  const bigGifWidth = Math.min(
    MAX_GIF_WIDTH,
    windowSize.width - (shouldShrink ? 32 : 64)
  )
  const sizeRatio = bigGifWidth / smallGifWidth
  const scale = isHovered ? sizeRatio : isHoveredRow ? 1.2 : 1

  const [isAnimating, setIsAnimating] = useState(false)

  const spring = useSpring({
    transform: `scale(${scale}) `,
    config: { tension: 380, friction: 40 },
    onStart: () => {
      setIsAnimating(true)
    },
    onRest: () => {
      setIsAnimating(false)
    },
  })

  const isOnTop = isHovered || isAnimating

  return (
    <ExpandableGifStyles
      {...{ smallGifWidth, shouldShrink, isOnTop }}
      onClick={e => e.stopPropagation()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <animated.img style={spring} src={pathToGif} alt="" srcSet="" />
    </ExpandableGifStyles>
  )
}
const ExpandableGifStyles = styled.div`
  height: 100%;
  padding: ${PADDING}px;
  position: ${p => (p.isOnTop ? "relative" : "static")};
  z-index: ${p => (p.isOnTop ? 9999999999 : 1)};
  overflow: ${p => (p.isOnTop ? "visible" : "hidden")};
  img {
    transform-origin: right;
    height: auto;
    width: ${p => p.smallGifWidth}px;
  }
  top: ${p => (p.shouldShrink ? `${-p.smallGifWidth / 2}px` : "unset")};
  right: ${p => (p.shouldShrink ? "-12px" : "unset")};
`