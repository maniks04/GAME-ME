import React from 'react'
import axios from 'axios'


class Leaderboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            leaderboardResults : []
            
        }
    this.handleClick=this.handleClick.bind(this)
    this.getLeaderboards = this.getLeaderboards.bind(this)
    }
    




    handleClick(){
        console.log('hey')
        axios.post('/leaderboard', {
            name : this.props.userName,
            time : this.props.timer
        }).then((res) => {
            console.log(res)
            this.getLeaderboards()//hit save
        })

    }

    getLeaderboards() {
        axios.get('/leaderboard').then((res) => {
            console.log('hi', res.data)//hit save
            this.setState({leaderboardResults : res.data})
            console.log('results', this.state.looper)
            
            // var array = []
            // res.data.forEach((item) =>{
            //     array.push(item.time)
                
            // })
            // this.setState({leaderboardResults : array})
            //     console.log(array)

            //this.setState({leaderboardResults: res.data})
            //console.log(this.state.leaderboardResults)
        })
    }

    // {this.props.data.map((dat, idx) => {
    //     return <div key={idx} className="txn-row">
    //               <div className="txn-data">{dat.date}</div>
    //               <div className="txn-data">{dat.description}</div>
    //               <div className="txn-data">{dat.amount}</div>
    //           </div>
    //   })}

    render() {


        return( 

                <div>
                    <div>leaderboard</div>
                    <div>{this.props.timer}</div>
                    <button onClick={this.handleClick}>leaderboard</button>
                    <div>{this.state.leaderboardResults.map((item, idx) =>{
                        return <div className='leaderboardresults'key={idx}>
                                   <div className='leaderboardresults'>{item.user} ______________ {item.time}</div>
                                </div>

                    })}</div>
                </div>
                )
    }



}

export default Leaderboard