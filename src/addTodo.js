import React, { Component } from 'react';
import './index.css';


class AddTodo extends Component {

    todoData;

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        

        this.state={
            taskName: ''
        };
    }


    handleChange = e => {
        this.setState({taskName: e.target.value})
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({taskName: ''});
    }

    //react life cycle
    componentDidMount(){
        this.todoData = JSON.parse(localStorage.getItem('todos'));

        if(localStorage.getItem('todos')){
            this.setState({
                taskName: this.todoData.taskName
            })
        } else {
            this.setState({
                taskName: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState){
        localStorage.setItem("todos", JSON.stringify(nextState));
    }

    


    render() { 
        
        return (
            
            <form className="addtodo-form shadow rounded p-3 mt-5 mb-5" onSubmit={this.handleSubmit}>
                <div>
                    <label className="col-form-label">Add your task here (just type here and leave to save)  </label>
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