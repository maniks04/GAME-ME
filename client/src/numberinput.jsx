import React from 'react'



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInput : ''
        }

    }




    render() {
        return(<form>
                <input placeholder='Type Here' onChange={((e)=> this.setState({numberInput : e.target.value}))}className='numberinput'></input>
               </form>
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
    