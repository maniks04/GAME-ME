import React from 'react'
import axios from 'axios';



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number : 'START',
            userInput : '_',
            myCounter : 0
        }
        
    }


    
    componentDidMount() {
        axios.post('/mathprofessor', {
            word : 'hello'
          }).then((res) => {
            console.log(res.data)
            this.setState({number : (res.data[0].result)})
            if (this.state.number === this.state.userInput) {console.log(this.state.myCounter)}
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
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 2})})} className='number'>2</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 3})})} className='number'>3</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 4})})} className='number'>4</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 5})})} className='number'>5</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 6})})} className='number'>6</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 7})})} className='number'>7</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 8})})} className='number'>8</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 9})})} className='number'>9</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : '-'})})} className='number'>-</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : 0})})} className='number'>0</button>
                    <button onClick={((e) => {e.preventDefault(); this.setState({userInput : ''})})} className='number'> X </button>
                    </div>
                </form>
            </div>
        )
    }


}

export default Numberinput