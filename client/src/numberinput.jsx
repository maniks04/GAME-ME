import React from 'react'
import axios from 'axios';



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number : '',
            userInput : '1',
            myCounter : 0
        }
        
    }


    
    componentDidMount() {
        axios.post('/mathprofessor', {
            word : 'hello'
          }).then((res) => {
            console.log(res.data)
            this.setState({number : (res.data[0].numberOne  + res.data[0].sign  +  res.data[0].numberTwo)})
          })
        
        setInterval(() => {
            this.setState({ myCounter: this.state.myCounter + 0.01 })
        }, 10);
        
    }
  

                
    render() {
        return(<div className='numberdom'>
                {Number.parseFloat(this.state.myCounter).toFixed(2)}
                <div className='currentproblem'>
                    {this.state.number}
                </div>
                <div className='userinput'>
                    {this.state.userInput}
                </div>
                <form>
                    <br></br>
                    <div className='numbergroup'>
                    <button onClick={((e) => {e.preventDefault(); console.log(Number.parseFloat(this.state.myCounter).toFixed(2), 'Seconds')})}className='number'>1</button>
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