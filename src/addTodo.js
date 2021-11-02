import React, { Component } from 'react';


class AddTodo extends Component {

    state={
        taskName: ''
    };

    handleChange = e => {
        this.setState({taskName: e.target.value})
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({taskName: ''});
    }

    render() { 
        return (
            <form className="row g-3 bg-light shadow rounded p-3 mt-5 mb-5" onSubmit={this.handleSubmit}>
                <div className="col-12">
                    <label className="col-form-label">Add your task here</label>
                    <input onChange={this.handleChange} value={this.state.taskName} placeholder="Task name" type="text" className="border form-control" />
                </div>
               
                <div className="col-12">
                     <button type="submit" className="btn btn-dark mb-3">Add Now</button>
                </div>
          </form>
        );
    }
}
 
export default AddTodo;