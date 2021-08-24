import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import { useEffect, useState } from "react";

const Theme = ({ theme, children }) => {
  // const [loading, setLoading] = useState(true);
  // const [theme, setTheme] = useState(null);

  // useEffect(async () => {
  //   const apiTheme = await fetch(
  //     "https://kyle-garrett-photo-server.herokuapp.com/theme"
  //   ).then((res) => res.json());
  //   const builtTheme = await buildTheme(apiTheme);
  //   const finalTheme = createTHeme(builtTheme);
  //   setTheme(finalTheme);
  //   setLoading(false);
  // }, []);

  // if (loading) return <div>loading</div>;

  const finalTheme = createMuiTheme(theme);

  return (
    <ThemeProvider theme={finalTheme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};
export default Theme;

export async function buildTheme(theme) {
  const {
    primaryColor,
    secondaryColor,
    ascentColor,
    backgroundColor,
    tertiaryColor,
    textPrimaryColor,
    textSecondaryColor,
    borderColor,
  } = theme[0];

  var res = {
    palette: {
      primary: {
        main: primaryColor,
        contrastText: "rgba(0, 0, 0, 0.91)",
      },
      secondary: {
        main: secondaryColor,
      },
      info: {
        main: tertiaryColor,
      },
      warning: {
        main: ascentColor,
      },
      success: {
        main: borderColor,
      },
      text: {
        primary: textPrimaryColor,
        secondary: textSecondaryColor,
      },
      accent1Color: ascentColor,
      accent2Color: "#f50057",
      accent3Color: "#ff80ab",
      alternateTextColor: tertiaryColor,
      canvasColor: "#90a4ae",
      borderColor: "rgba(255, 255, 255, 0.87)",
      disabledColor: "rgba(255, 255, 255, 0.47)",
      pickerHeaderColor: "rgba(255, 255, 255, 0.18)",
      clockCircleColor: "rgba(255, 255, 255, 0.24)",
      shadowColor: "rgba(0, 0, 0, 0.75)",
      background: { default: backgroundColor },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    appBar: {
      color: primaryColor,
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
  };

  return res;
}
