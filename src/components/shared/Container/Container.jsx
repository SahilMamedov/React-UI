import styled from "styled-components"

export const Container=styled.div`
margin: 0 ${(props)=> props.theme.marginPadding.px[5]};
display:${(props)=>props.theme.display.flex};
justify-content:${(props)=>props.theme.display.JustifyContentCenter};
`