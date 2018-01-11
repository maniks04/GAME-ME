import React from 'react'
import App from './index.jsx'
import Numberinput from './numberinput.jsx'

class Countdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            countDownClock : 3
        }
         this.doSomething = this.doSomething.bind(this)
        // this.startTimer=this.startTimer.bind(this)
        //this.startTheCountDownClock = this.startTheCountDownClock.bind(this)
    }


    doSomething() {
        this.setState({countDownClock : this.state.countDownClock-1})
        //console.log(this.state.countDownClock)
    }
    
    componentDidMount() {
        setInterval(() => {this.doSomething()} , 1000) 
    }

    



    render() {
        //load index.jsx finally
        if (this.state.countDownClock<=0) {return(<Numberinput userName={this.props.userName}/>)}
        //if (this.state.countDownClock<=0) {return(<div className='fuckyou'>fuck u chris and aaron ur both bitches.</div>)}
       if (this.state.countDownClock>0){return (<div className='countdown'>{this.state.countDownClock}</div>)}
        
        
    }

}

export default Countdown
