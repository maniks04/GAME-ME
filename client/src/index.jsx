import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Numberinput from './numberinput.jsx';
import Numberview from './numberview.jsx'
// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      userName : '',
       myCounter : 0,
       //time: Date.now()
    }
    this.handleClick = this.handleClick.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }
  
  componentDidMount() {
    if (this.state.userName === '') {
      const userName = window.prompt()
  
      {this.setState({userName : userName})}
      console.log(userName)
    }
 
  
   
  
}


// componentDidMount() {
//   this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
// }
// componentWillUnmount() {
//   clearInterval(this.interval);
// }

startTimer() {
  setInterval(() => {
    this.setState({ myCounter: this.state.myCounter + 0.01 })
    
   }, 10); 
}
  

handleClick () {
  //console.log(this.state.userName, '  ', this.state.myCounter)
  console.log(Number.parseFloat(this.state.myCounter).toFixed(2), 'Seconds') 
  
}

  render () {
    return (<div>
      <button onClick={this.startTimer}>Start</button>
      <button onClick={this.handleClick}>check</button>
            {this.state.userName}
            <Numberview />
            <Numberinput />
            
            </div>
            )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));