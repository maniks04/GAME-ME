import React from 'react'



class Numberinput extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userInput : ''
        }

    }




    render() {
        return(<div>
                <form className='numbergroup'>
                    <button className='1'>1</button>
                    <button className='2'>2</button>
                    <button className='3'>3</button>
                    <br></br>
                    <button className='4'>4</button>
                    <button className='5'>5</button>
                    <button className='6'>6</button>
                    <br></br>
                    <button className='7'>7</button>
                    <button className='8'>8</button>
                    <button className='9'>9</button>
                    <br></br>
                    <button className='-'>-</button>
                    <button className='0'>0</button>
                    <button className=' . '>.</button>
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
    