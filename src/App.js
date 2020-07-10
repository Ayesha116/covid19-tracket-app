import React from 'react';
import { Fetchdata } from "./data/Fetchdata";
import { Cards } from "./components/Cards";
import { Chart } from "./components/Chart";
import Countries from "./components/Countries";
import  covid  from "./images/covid.png";
import "./App.css";

class App extends React.Component {
  state = {data : {},
  country : "",
}


  async componentDidMount() {
    const data = await Fetchdata()
    this.setState({ data })
    // console.log(data)

  }
  render() {
    const { data, country } = this.state;
    return (
      <div className="App">
        <img src = { covid } alt ="corona" width = "200px" className = "image"></img>
        <h5 className = "heading">COVID19 TRACKER</h5>
        <Cards data = { data }></Cards>
        <Chart data = {data}  country = {country}></Chart>
        <Countries></Countries>
        
      </div>
    );

  }
  
}

export default App;
