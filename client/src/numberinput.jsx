import React from 'react'
import axios from 'axios';



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number : '2 + 2',
            userInput : '1'
        }
        this.starttimer = this.startTimer.bind(this)
    }
    startTimer() {
        axios.post('/mathprofessor', {
          word : 'hello'
        }).then((res) => {
          console.log(res.body, 'hi')
        })
        // setInterval(() => {
        //   this.setState({ myCounter: this.state.myCounter + 0.01 })
          
        //  }, 10); 
    }
    componentDidMount() {
        //console.log('mounted')
        this.startTimer()
        
    }




    render() {
        return(<div className='numberdom'>
                <div className='currentproblem'>
                    {this.state.number}
                </div>
                <div className='userinput'>
                    {this.state.userInput}
                </div>
                <form>
                    <br></br>
                    <div className='numbergroup'>
                    <button className='number'>1</button>
                    <button className='number'>2</button>
                    <button className='number'>3</button>
                    <br></br>
                    <button className='number'>4</button>
                    <button className='number'>5</button>
                    <button className='number'>6</button>
                    <br></br>
                    <button className='number'>7</button>
                    <button className='number'>8</button>
                    <button className='number'>9</button>
                    <br></br>
                    <button className='number'>-</button>
                    <button className='number'>0</button>
                    <button className='number'> . </button>
                    </div>
                </form>
            </div>
                )
    }




}

export default Numberinput