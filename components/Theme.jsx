import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseLine from "@material-ui/core/CssBaseline";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#04000A",
      secondary: "#263238",
      contrastText: "rgba(117, 117, 117, 0.91)",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "#b0bec5",
    },
    accent1Color: "#f44336",
    accent2Color: "#f50057",
    accent3Color: "#ff80ab",
    alternateTextColor: "#ff5722",
    canvasColor: "#90a4ae",
    borderColor: "rgba(255, 255, 255, 0.87)",
    disabledColor: "rgba(255, 255, 255, 0.47)",
    pickerHeaderColor: "rgba(255, 255, 255, 0.18)",
    clockCircleColor: "rgba(255, 255, 255, 0.24)",
    shadowColor: "rgba(0, 0, 0, 0.75)",
    background: { default: "#04000A" },
  },
  appBar: {
    color: "#04000A",
    textColor: "rgba(0, 0, 0, 0.87)",
    height: 67,
    titleFontWeight: 400,
    padding: 24,
  },
  badge: {
    color: "#00acc1",
    fontWeight: 500,
    textColor: "rgba(0, 0, 0, 0.85)",
    primaryColor: "rgba(96, 125, 139, 0.98)",
    primaryTextColor: "rgba(255, 255, 255, 0.54)",
  },
  button: {
    height: 36,
    minWidth: 88,
    iconButtonSize: 48,
  },
  card: {
    titleColor: "#263238",
    subtitleColor: "rgba(0, 0, 0, 0.58)",
    fontWeight: 500,
  },
  borderRadius: 4,
});

const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};
export default Theme;
