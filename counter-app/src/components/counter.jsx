import React, { Component } from 'react';

class Counter extends Component{
    state ={
        count:0
    };
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'zero':count;
    }
    render(){
        
        return( 
        <div>
            <span className='m-3'>{this.formatCount()}</span>
            <button className='m-3'>Incrm</button>
            <button className='m-3'>Decr</button>
        </div>)
    }
}
export default Counter;