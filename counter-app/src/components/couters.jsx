import React, { Component } from 'react';
import Counters from './counter'

class Couters extends Component {
    state={
        counters:[
           {id:1 , value:0},
           {id:2 , value:0},
           {id:3 , value:0},
           {id:4 , value:0},
        ]
    }
    render(){
        return(<div>{
        this.state.counters.map(element => <Counters key={element.id} value={element.value}/>)
        }
        </div>)
    }

}
export default Couters