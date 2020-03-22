import React from "react";
import result from "./data.json";
import InputField from "./InputField";
import SearchButton from "./SearchButton";
import ShowResults from "./ShowResults";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SwitchStyle from "./SwitchStyle";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#007BA7"
    },
    secondary: {
      main: "#02e2f2"
    }
  },
  typography: {
    fontFamily: [
      "Nunito",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif"
    ].join(",")
  }
});

class App extends React.Component {
  state = {
    inputSphere: 0,
    results: [],
    darkMode: false,
    search: ""
  };

  componentDidMount() {
    this.setState({ results: result.data });
    console.log(result.data);
  }

  onSearch = inputSphere => {
    let filteredResults = this.state.results.filter(element => {
      // console.log(event.target.value);
      if (element.maxSphere > inputSphere > element.minSphere) {
        return true;
      } else {
        return null;
      }
    });
    this.setState({ results: filteredResults });
  };

  onSearchCylinder = () => {};
  onSearchAddition = () => {};

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };
  onChangeCylinder = (key, value) => {
    this.setState({ [key]: value });
  };
  onChangeAddition = (key, value) => {
    this.setState({ [key]: value });
  };
  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  render() {
    const { darkMode, inputSphere, results } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <div className={darkMode ? "AppDark" : "AppLight"}>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Sphere"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearch} />
          </Grid>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Cylinder"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearchCylinder} />
          </Grid>
          <Grid className="searchField">
            <InputField
              inputField={inputSphere}
              name="inputSphere"
              label="Addition"
              onChange={this.onChange}
            />
            <SearchButton onSearch={this.onSearchAddition} />
          </Grid>
          <Grid className={darkMode ? "serchResult" : "serchResultLight"}>
            <ShowResults results={results} />
          </Grid>
          <SwitchStyle
            darkMode={this.state.darkMode}
            toggledarkMode={this.toggledarkMode}
          />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
