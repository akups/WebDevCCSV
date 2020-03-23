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
    inputCylinder: 0,
    inputAddition: 0,
    results: [],
    darkMode: false
  };
  //1. When the page first opens, make it display all the products you can find under „result“ (imported from data.json).
  componentDidMount() {
    this.setState({ results: result.data });
    console.log(result.data);
  }
  //   2. Finish the „findResults“ function to filter the „result".
  // 	the function takes parameters and returns all the products that are within the range of this parameter.
  // 	so it takes a value for the ’sphere’ and returns all the products where the value lies in between the maximum and minimum sphere
  // 3. Trigger this function when clicking on the ’search’ button
  //onSearch and filter combined in one function but repeated for each search button
  //onSearch and filter for the sphere
  onSearch = target => {
    target.preventDefault();
    const { results, inputSphere } = this.state;
    console.log(inputSphere);
    let filteredResults = results.filter(product => {
      if (
        product.maxSphere >= inputSphere &&
        inputSphere >= product.minSphere
      ) {
        return true;
      }
      return false;
    });
    this.setState({ results: filteredResults });
  };

  //onSearch and filter for the cylinder
  onSearchCylinder = target => {
    target.preventDefault();
    const { results, inputCylinder } = this.state;
    console.log(inputCylinder);
    let filteredResults = results.filter(product => {
      if (
        product.maxCylinder >= inputCylinder &&
        inputCylinder >= product.minCylinder
      ) {
        return true;
      }
      return false;
    });
    this.setState({ results: filteredResults });
  };

  //onSearch and filter for the addition
  onSearchAddition = target => {
    target.preventDefault();
    const { results, inputAddition } = this.state;
    console.log(inputAddition);
    let filteredResults = results.filter(product => {
      if (
        product.maxAddition >= inputAddition &&
        inputAddition >= product.minAddition
      ) {
        return true;
      }
      return false;
    });
    this.setState({ results: filteredResults });
  };

  //onChange for sphere
  onChange = (key, value) => {
    this.setState({ [key]: value });
  };

  //onChange for cylinder
  onChangeCylinder = (key1, value1) => {
    this.setState({ [key1]: value1 });
  };

  //onChange for addition
  onChangeAddition = (key2, value2) => {
    this.setState({ [key2]: value2 });
  };

  toggledarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode
    });
  };
  render() {
    const {
      darkMode,
      inputSphere,
      inputCylinder,
      inputAddition,
      results
    } = this.state;
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
              inputField={inputCylinder}
              name="inputCylinder"
              label="Cylinder"
              onChange={this.onChangeCylinder}
            />
            <SearchButton onSearch={this.onSearchCylinder} />
          </Grid>
          <Grid className="searchField">
            <InputField
              inputField={inputAddition}
              name="inputAddition"
              label="Addition"
              onChange={this.onChangeAddition}
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
