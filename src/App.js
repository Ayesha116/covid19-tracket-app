import React from 'react';
import { Fetchdata } from "./data/Fetchdata";
import { Cards } from "./components/Cards";
import Chart  from "./components/Chart";
import Countries from "./components/Countries";
import  covid  from ".componenets/images/covid.png";
import "./App.css";

// cl
//       <div className="App">
//         <
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await Fetchdata();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await Fetchdata(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="App">
        <img src = { covid } alt ="corona" width = "200px" className = "image" />
        <h5 className = "heading">COVID19 TRACKER</h5>
        <Cards data={data} /><br/><br/><br/>
        <Countries handleCountryChange={this.handleCountryChange} /><br/><br/>
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
