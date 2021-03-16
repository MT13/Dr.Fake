import { createMuiTheme } from "@material-ui/core";
import { borders } from "@material-ui/system";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f24e33",
    },
    secondary: {
      main: "#fAbe4C",
    },
  },
  typography: {
    fontFamily: 'Firago',
    h5: {
      fontFamily: 'Firago',
      fontWeight: 'bold',
    }
  },
  textBox: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    elevation: 0,
    variant: "outlined",
    borderColor: "black",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    minHeight: 40,
    itemAlign: "center",
    width: "80%",
    justify: "center",
    border: 1,
    marginLeft: "20%",
  },
  overrides: {
    MuiFab: {
      extended: {
        backgroundColor: "white",
        boxShadow: "0px 0px",
        fontFamily: 'RobotoMt',
        fontWeight: "bold",
      },
    },
  },
});

export default theme;
