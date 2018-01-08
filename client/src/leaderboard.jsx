import React from 'react'


class Leaderboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        return(<div>
        <div>leaderboard</div>
                <div>{this.props.timer}</div>
                </div>
                )
    }



}

export default Leaderboard