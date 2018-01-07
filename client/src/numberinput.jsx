import React from 'react'



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            number : '2 + 2',
            userInput : '1'
        }

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


                // <button className='1'></button>
                // <button className='2'></button>
                // <button className='3'></button>
                // <button className='4'></button>
                // <button className='5'></button>
                // <button className='6'></button>
                // <button className='7'></button>
                // <button className='8'></button>
                // <button className='9'></button>
                // <button className='0'></button>
    