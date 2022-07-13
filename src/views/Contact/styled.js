import { space, color, layout } from "styled-system";
import styled from "styled-components";

export const Container = styled.div`
  margin: 0 280px;
  display: ${(props) => props.theme.display.flex};
  justify-content: ${(props) => props.theme.display.JustifyContentCenter};
`;
export const ContactButton = styled.button(
color,
layout,
space,
)
