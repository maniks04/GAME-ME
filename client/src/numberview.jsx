import React from 'react'


class Numberview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            number : '2 + 2'
        }

    }


    changeTheNumber () {
        this.setState({number : someShit})
    }




    render () {
        return (
            <form>
                <div className='numberview'>{this.state.someShit}</div>
                
            </form>
        )
    }





}

export default Numberview