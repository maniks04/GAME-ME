import React from 'react'

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
        console.log('hey')
        //console.log('this.state.countDownClock')
        this.setState({countDownClock : this.state.countDownClock-1})
    }
    
    componentDidMount() {
        //var count = 0
        setInterval(() => {this.doSomething()} , 1000)
        
        
    }

    



    render() {
        //loadindex.jsx finally
        if (this.state.countDownClock<=0) {return(<div className='fuckyou'>fuck u.</div>)}
       if (this.state.countDownClock>0){return (<div className='countdown'>{this.state.countDownClock}</div>)}
        
        
    }

}

export default Countdown