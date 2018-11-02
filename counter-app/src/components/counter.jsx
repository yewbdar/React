import React, { Component } from 'react';

class Counter extends Component{
    state ={
        count:this.props.value
    };
    incrementValue = () =>{
       
        this.setState({count:this.state.count + 1 })
    }   
    render(){
        
        return( 
        <div>
            <span className={this.getBadgeColor()}>{this.formatCount()}</span>
            <button onClick={this.incrementValue} className='m-3'>Incrm</button>
            <button className='m-3'>Decr</button>
        </div>)
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'zero':count;
    }
    getBadgeColor(){
        let classes = 'badge  m-3 badge-';
        classes+= (this.state.count === 0) ? 'warning':'primary';
        return classes;
     }
}
export default Counter;