import { ThemeProvider } from "styled-components";

const theme = {
  backgorund: "purple",
  colors: {
    white: "white",
    black: "black",
  },
  display:{
    flex:"flex",
    JustifyContentCenter:"center",
    aliginItem:"center"
  }


};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
