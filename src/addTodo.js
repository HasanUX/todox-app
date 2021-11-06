import React, { Component } from 'react';
import './index.css';


class AddTodo extends Component {

    state={
        taskName: '',
        saveTodo: false
    };


    handleChange = e => {
        this.setState({taskName: e.target.value});
    }
    
    handleSubmit = e => {
        // const{ taskName, saveTodo } = this.state;
        // localStorage.setItem('saveTodo', saveTodo);
        // localStorage.setItem('taskName', saveTodo ? taskName: '');
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({taskName: ''});
    }


    render() { 
        
        console.log("AddTodo rendered");

        return (
            
            <form className="addtodo-form shadow rounded p-3 mt-5 mb-5" onSubmit={this.handleSubmit}>
                <div>
                    <label className="col-form-label">Add your task here </label>
                    <input onChange={this.handleChange} value={this.state.taskName} placeholder="Task name" type="text" className="border form-control" />
                </div>
               
                <div className="col-12 mt-3">
                     <button type="submit" className="btn btn-dark mb-3">Add Now</button>
                    
                </div>

                
          </form>
        );
    }
}
 
export default AddTodo;