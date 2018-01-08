import React from 'react'
import Countdown from './countdown.jsx'

class Initialpage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startClicked : false,
            countDownTriggered : false
        }
        this.handleStartClick = this.handleStartClick.bind(this)
    }

    handleStartClick (e) {
        e.preventDefault()
        console.log('handleStartClick()')
        this.setState({startClicked : true})
        //this.setState({countDown : this.state.countDown-1})
    }

    


    render() {
        if (this.state.startClicked === true) {
            return (
                <Countdown userName={this.props.userName}/>
            )
        } 

        // if (this.state.startClicked === true) {
        //     return(
        //         <div>
        //             <div className='fuckyou'>FUCK YOU</div>
        //             <div>{this.state.countDownTriggered}</div>
        //         </div>
        //     )
        // }
        
        if (this.state.startClicked === false) {
            return(
                <div>
                    <h1 className='welcome' >WELCOME</h1>
                    <h3 className='to' >to</h3>
                    <h1 className='gameme' >GAME--ME</h1>
                    <form className='startbuttoncontainer'>
                    <button onClick={this.handleStartClick} className='startbutton'>START</button>
                    </form>
                </div>
            )
        }
       
    }

}

export default Initialpage