import React from 'react'
import axios from 'axios'


class Leaderboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            leaderboardResults : ''
        }
    this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        console.log('hey')
        axios.post('/leaderboard', {
            name : this.props.userName,
            time : this.props.timer
        }).then((res) => {
            console.log(res)
        })
    }




    render() {
        return( <div>
                    <div>leaderboard</div>
                    <div>{this.props.timer}</div>
                    <button onClick={this.handleClick}>leaderboard</button>
                    <div>{this.state.leaderboardResults}</div>
                </div>
                )
    }



}

export default Leaderboard