import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import DeleteAll from './DeleteAll';
import Pagination from './Pagination';
import paginate from './utils/paginate'

class Todox extends React.Component {

    state = {

        currentPage: 1,
        pageSize: 5,
        todos:[
          {
            id: 1,
            taskName: "Pray fajr prayer at mosque (5:20AM)",
            done: ""
          },
    
          {
            id: 2,
            taskName: "Recite Quran at least one page (5:45AM)",
            done: ""
          },
    
          {
            id: 3,
            taskName: "Take breakfast",
            done: ""
          }
        ]
      };
    
    
      // delete/increment item method 
      deleteTodo = id => {
        // if(this.fish === undefined) {return} //catcher to handle error
        const todos = this.state.todos.filter(todo => todo.id !== id);
    
        this.setState({ todos });
        
      };
    
      //delete all objects of array method
      deleteAllTodo = () => {
        // eslint-disable-next-line no-unused-vars
        const {todos} =  this.state.todos;
        this.setState({ todos: []});
      };
    
    
      // AddTodo function to add task to the state prop array - todos
    
      addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({todos});
      }


      // task-done func - toggle checkbox
      handleDone = todo => {
        const todos = [...this.state.todos];
        const index = todos.indexOf(todo);
        todos[index] = {...todos[index]};
        todos[index].done = !todos[index].done;
        this.setState({ todos });
      }


    //change page/list using pagination below the table
    handlePageChange = page => {
      this.setState({currentPage: page});
    }


    render() { 
        console.log("Todox rendered");
        const {length: count} = this.state.todos;
        const { todos, currentPage, pageSize } = this.state;
        
        const todoAll = paginate(todos, currentPage, pageSize);

        return (
            <div className="App container">
                <div className="row justify-content-center">
  
                    <div className="col-12 col-md-6">
                        <h1 className="app-title mt-5 mb-5 text-white"> Todox - <span className="text-primary"> track your task <span className="text-secondary"> v.1 </span> </span></h1>
                        
                        {todos.length > 0 && 
                        <div className="d-flex justify-content-between">
                          <h5 className="text-white fw-light mb-4">You got {count} todos on the go</h5>
                          <Pagination 
                          todosCount={count}
                          onPageChange={this.handlePageChange}
                          currentPage={currentPage}
                          pageSize={pageSize}
                          />
                        </div>
                        }  

                        <Todo 
                        todos={todoAll}
                        onDelete={this.deleteTodo}
                        handleDone={this.handleDone}
                        />

                       
                        {todos.length > 0 && 
                        <DeleteAll onDeleteAll={this.deleteAllTodo} todos={todos}/>
                        }
                
                        <AddTodo addTodo={this.addTodo}/>
                  </div>
                </div>
            </div>
        );
    }
}
 
export default Todox;
