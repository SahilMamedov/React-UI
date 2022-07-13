import styled from "styled-components"


export const Button = styled.button`
  padding: 8px 40px;
  border-radius: 8px;
  border: none;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.backgorund};
  margin: 5px;
`;
