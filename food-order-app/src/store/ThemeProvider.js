import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
    return (
        <ThemeProvider value={ThemeContext}>
          {props.children}
        </ThemeProvider>
    )
}