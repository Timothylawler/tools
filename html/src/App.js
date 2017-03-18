import React, { Component } from 'react';
import './App.css';

import CompOne from './templates/tempComps/CompOne.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>Template</h2>
        </div>
        <div className="container">
					{
						this.props.children || <CompOne/>
					}
				</div>
      </div>
    );
  }
}

export default App;
