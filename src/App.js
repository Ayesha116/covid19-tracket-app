import React from 'react';
import { Fetchdata } from "./data/Fetchdata";

class App extends React.Component {

  async componentDidMount() {
    const data = await Fetchdata()
    console.log(data.data.confirmed.value)
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );

  }
  
}

export default App;
