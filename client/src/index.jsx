import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Numberinput from './numberinput.jsx';
import axios from 'axios';
import Initialpage from './initialpage.jsx'

// import AnyComponent from './components/filename.jsx'

class App extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
      userName : '',
      myCounter : 0,
      pageRendered : false
       //time: Date.now()
    }
    this.handleClick = this.handleClick.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }
  
  // componentDidMount() {
  //   if (this.state.userName === '') {
  //     const userName = window.prompt()
  
  //     {this.setState({userName : userName})}
  //     console.log(userName)
  //   }

  
  //}
 


startTimer() {
  axios.post('/mathprofessor', {
    word : 'hello'
  }).then((res) => {
    console.log(res.body)
  })
  // setInterval(() => {
  //   this.setState({ myCounter: this.state.myCounter + 0.01 })
    
  //  }, 10); 
}
  

handleClick () {
  //console.log(this.state.userName, '  ', this.state.myCounter)
  console.log(Number.parseFloat(this.state.myCounter).toFixed(2), 'Seconds') 
  
}

  render () {
    if (this.state.pageRendered === false) {
      return(
        <Initialpage />
      )
    }


      return (<div>
        <button className='topbutton' onClick={this.startTimer}>start</button>
        <button className='topbutton' onClick={this.handleClick}>check</button>
              {this.state.userName}
            
              <Numberinput />
              
              </div>
              )
    
    
  }
}

ReactDOM.render(<App />, document.getElementById('app'));