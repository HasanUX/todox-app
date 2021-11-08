/* eslint-disable jsx-a11y/anchor-is-valid */
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
            
                <div className="mt-3">
                    <button type="submit" className="btn btn-dark mb-3">Add Now</button>
                    
                </div>
            </form>
          
            // <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            //     <a className="navbar-brand">Add your task right from here <i className="fa fa-angle-double-right"></i></a>
        
            //     <div className="navbar-collapse">
            //         <ul className="navbar-nav mr-auto">
                    
            //             <li className="nav-item">
            //                 <form className="addtodo-form shadow rounded p-3 mt-5 mb-5" onSubmit={this.handleSubmit}>
            //                     <div>
            //                         <label className="col-form-label">Add your task here </label>
            //                         <input onChange={this.handleChange} value={this.state.taskName} placeholder="Task name" type="text" className="border form-control" />
            //                     </div>
                            
            //                     <div className="mt-3">
            //                         <button type="submit" className="btn btn-dark mb-3">Add Now</button>
                                    
            //                     </div>
            //                 </form>
            //             </li>
                    
            //         </ul>
            //     </div>
            // </nav>
            
        );
    }
}
 
export default AddTodo;