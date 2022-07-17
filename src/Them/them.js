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
  },
  marginPadding:{
    px:[
      "8px",
      "12px",
      "16px",
      "24px",
      "32px",
      "280px"
    ]
      
    

  }
  


};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
