import React from 'react';


const Todo = ({todos, onDelete, onDeleteAll}) => {

    const todoxList = todos.length ? (
        todos.map(todo => {
            return(

                <div>
                    <div className="list-group-item list-group-item-action d-flex gap-3 py-3"  key={todo.id}>
                        <div className="d-flex gap-2 w-100 justify-content-between">
                            <div>
                                <h6 className="text-dark mb-0">{todo.taskName}</h6>
                                {/* <p className="text-secondary mb-0">{todo.taskTag}</p> */}
                        
                            </div>
                        
                            {<button className="btn btn-sm btn-danger"
                                onClick={() => onDelete(todo.id)}> 
                                X    
                            </button>}
                        </div>  
                    
                    </div>
                  
                </div>
            )
        })
    ) : (
        <h4 className="bg-dark rounded shadow text-white text-center p-3"> 
        you got no task dude! why not add some... </h4>
    )

 

    return ( 
        <div className="task-list-group list-group">
            {todoxList}

            <div className="d-flex justify-content-center">
                {<button className="btn btn-sm btn-warning mt-3"
                    onClick={onDeleteAll}> 
                    Delete All  
                </button>}
            </div>
        </div>
     );
}
 

export default Todo;