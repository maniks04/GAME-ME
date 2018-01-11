import React from 'react'
import Initialpage from './initialpage.jsx'


class Startover extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            something : false,
            timeArray : []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        var array = []
        this.props.leaderboardResults.forEach(function(item) {
            array.push([item.time, item.user])
            
        })
        this.setState({timeArray:array.sort()})

    }


    handleClick() {
        this.setState({something:true})
    }


render() {

    if(this.state.something===true) {
        return(<Initialpage />)
    }

return(
<div>
            <button onClick={this.handleClick}> TRY AGAIN!</button>

            {}
        <div>{this.state.timeArray}</div>
        </div>
)
}




}

export default Startover