import React from 'react';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      healthState: null
    };
    // this.handleNewGameStart = this.handleNewGameStart.bind(this);
    // // this.handleRemoveHealth = this.handleRemoveHealth.bind(this);
  }
  
  var initialStartState = {
    name: Fulffy,
    health: 50
  }

// componentDidMount() {
//   this.gameTimer = setInterval(() =>
//   this.updateHealth(),
//   1000
//   );
}

  render(){
    return (
      <div className="contentMain">
        <div>
          <Switch>
            <Route exact path='/' render={()=><Critter startState={this.initialStartState} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;