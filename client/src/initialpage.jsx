import React from 'react'


class Initialpage extends React.Component {
    constructor(props) {
        super(props)


    }

    


    render() {
        return(
            <div>
                <h1 className='welcome' >WELCOME</h1>
                <h3 className='to' >to</h3>
                <h1 className='gameme' >GAME--ME</h1>
                <form className='startbuttoncontainer'>
                <button className='startbutton'>START</button>
                </form>
            </div>
           
        )
    }

}

export default Initialpage