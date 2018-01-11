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
        .then(console.log(this.state.timeArray))

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
            <h1 className='manik1'>LEADERBOARD RESULTS</h1>

            
       {this.state.timeArray.map((item, idx) => {
           return <div key={idx}>
           
           <div className='manik'>{item[1]}  ---------------  {item[0]}
           </div>
                    
                </div>
       })}
        </div>
)
}




}

export default Startover