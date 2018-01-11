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
        function sortNumber(a,b) {
            return a[0] - b[0];
        }
        
        array.sort(sortNumber);
        this.setState({timeArray:array})
        console.log(array)
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
            <h1 className='manikwrap'>LEADERBOARD RESULTS</h1>

         <div id='container'>   
       {this.state.timeArray.map((item, idx) => {
           return <div key={idx} className='manik'>
           <div className='index'>{idx+1}.</div>
           <div className='manik1'>{item[1]}-</div>
           <div className='manik2'>{item[0]}</div>
           <div className='smaller'>seconds</div>
           </div>
                    
                
       })}</div>
        </div>
)
}




}

export default Startover