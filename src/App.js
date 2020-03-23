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
    darkMode: false
  };

  componentDidMount() {
    this.setState({ results: result.data });
    console.log(result.data);
  }

  updateInputSphere = inputSphere => {
    this.setState({
      inputSphere: inputSphere
    });
  };

  onSearch = inputSphere => {
    console.log(result.data);
    console.log(inputSphere);
    console.log(inputSphere.target.value);
    console.log(inputSphere.target);
    let filteredResults = this.state.results.filter(product => {
      if (product.maxSphere >= inputSphere.target.value >= product.minSphere) {
        return true;
      }
      return null;
    });
    console.log(this.state.results);
    console.log(filteredResults);
    this.setState({ results: filteredResults });
  };
  updateInputSphere = inputSphere => {
    this.setState({
      inputSphere: inputSphere
    });
  };

  onSearchCylinder = () => {};
  onSearchAddition = () => {};

  onChange = (key, value) => {
    this.setState({ [key]: value });
  };
  onChangeCylinder = (key1, value1) => {
    this.setState({ [key1]: value1 });
  };
  onChangeAddition = (key2, value2) => {
    this.setState({ [key2]: value2 });
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
