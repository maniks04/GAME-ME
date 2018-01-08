import React from 'react'


class Initialpage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            startClicked : true,
            countdown : 3
        }

    }

    handleStartClick () {
        console.log('hey')
        //this.setState({startClicked : true})
    }

    


    render() {
        if (this.state.startClicked === true) {
            return(<div className='fuckyou'>FUCK YOU</div>)
        }
        if (this.state.startClicked === false) {
            return(
                <div>
                    <h1 className='welcome' >WELCOME</h1>
                    <h3 className='to' >to</h3>
                    <h1 className='gameme' >GAME--ME</h1>
                    <form className='startbuttoncontainer'>
                    <button onClick={(e) => {e.preventDefault(); this.handleStartClick}} className='startbutton'>START</button>
                    </form>
                </div>
            )
        }
       
    }

}

export default Initialpage