import React from 'react'
import styled from 'styled-components'

const BannerBase = styled.div`
  position: absolute;
  color: white;
`

const BannerWrapperBottomRight = styled(BannerBase)`
  position: absolute;
  color: white;
  right: 0;
  bottom: 0;
  margin-right: 5%;
  margin-bottom: 5%;
`

const BannerWrapperBottomLeft = styled(BannerBase)`
  position: absolute;
  color: white;
  left: 0;
  bottom: 0;
  margin-left: 5%;
  margin-bottom: 5%;
`




const BannerWrapperTopRight = styled(BannerBase)`
  position: absolute;
  color: white;
`

const BannerWrapperTopLeft = styled(BannerBase)`
  position: absolute;
  color: white;
`

const Banner = props => {
  switch (props.position) {
    case "bottomRight":
      return <BannerWrapperBottomRight><div>{props.text}</div></BannerWrapperBottomRight>
    case "bottomLeft":
      return <BannerWrapperBottomLeft><div>{props.text}</div></BannerWrapperBottomLeft>
    case "TopRight":
      return <BannerWrapperTopRight><div>{props.text}</div></BannerWrapperTopRight>
    case "TopLeft":
      return <BannerWrapperTopLeft><div>{props.text}</div></BannerWrapperTopLeft>
    default:
      return <BannerWrapperTopLeft><div>{props.text}</div></BannerWrapperTopLeft>

  }
}

export default Banner;