import React from 'react'
import axios from 'axios';
import Leaderboard from './leaderboard.jsx'



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number : '',
            numberProblem : '',
            userInput : '',
            myCounter : 0,
            done : false
        }
        this.checkCorrectAnswer = this.checkCorrectAnswer.bind(this)
        this.startTheLoop = this.startTheLoop.bind(this)
       this.clearAnswer = this.clearAnswer.bind(this)
    }


   clearAnswer() {
    this.setState({userInput : '' })
   }
     
     
     checkCorrectAnswer(numString) {
      
        this.setState({userInput : this.state.userInput+numString}) 
       

     }

     startTheLoop(array) {

         var count=0
         this.setState({numberProblem:array[0].problem})
         this.setState({number:array[0].result})
         
        setInterval(() => {if(count===  15) {this.setState({done : this.state.true})};if (this.state.number===this.state.userInput){count++;console.log(count);if(array[count]){this.setState({numberProblem:array[count].problem});this.setState({number:array[count].result})};this.setState({userInput:'_'});this.setState({userInput : ''})}}, 10)
     }
    
    componentDidMount() {
        axios.post('/mathprofessor', {
            word : 'hello'
          }).then((res) => {
            console.log(res.data)
            setInterval(() => {if(this.state.done===false) {
                this.setState({ myCounter: this.state.myCounter + 0.01 })
            }
            }
                , 10);
                
            
            this.startTheLoop(res.data)
          })
         
    }

    
  
   

                
    render() {
        if (this.state.done!==false) {
            return(<Leaderboard  userName={this.props.userName} timer={Number.parseFloat(this.state.myCounter).toFixed(2)}/>)
        }
        return(<div className='numberdom'>
                {Number.parseFloat(this.state.myCounter).toFixed(2)}
                <div className='currentproblem'>
                    {this.state.numberProblem}
                </div>
                <div className='userinput'>
                    {this.state.userInput}
                </div>
                <form>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.clearAnswer('x')})} className='number'> X </button>
                    <div className='numbergroup'>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('1')})}className='number'>1</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('2')})} className='number'>2</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('3')})} className='number'>3</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('4')})} className='number'>4</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('5')})} className='number'>5</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('6')})} className='number'>6</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('7')})} className='number'>7</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('8')})} className='number'>8</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('9')})} className='number'>9</button>
                    <br></br>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('-')})} className='number'>-</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('0')})} className='number'>0</button>
                    <button onClick={((e) => {e.preventDefault(); this.checkCorrectAnswer('.')})} className='number'> . </button>
                    </div>
                </form>
            </div>
        )
    }


}

export default Numberinput