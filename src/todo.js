import React from 'react';


const Todo = ({todos, onDelete}) => {

    const todoxList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3" key={todo.id}>
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="text-dark mb-0">{todo.taskName}</h6>
                            <p className="text-secondary mb-0">{todo.taskTag}</p>
                            {/* {console.log(todos)} */}
                        </div>
                        <button onClick={() => onDelete(todo)} className="btn btn-sm btn-danger"> 
                                <i className="fas fa-trash"></i> 
                        </button>
                    </div>
                </div>
            )
        })
    ) : (
        <p className="text-center"> you got no tasks! why not add any </p>
    )

    return ( 
        <div className="task-list-group list-group">
            {todoxList}
        </div>
     );
}
 

export default Todo;