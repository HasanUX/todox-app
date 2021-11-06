import React from 'react';


class DeleteAll extends React.Component {

    //react life cycle
    //shouldcomponentupdate controls re-renders
    //shouldn't be used frequently,here just used for learning purpose
    shouldComponentUpdate(nextProps){

        const {onDeleteAll: currentonDeleteAll} = this.props;
        const {onDeleteAll: nextonDeleteAll} = nextProps;

        if(currentonDeleteAll === nextonDeleteAll){
            return false;
        } else {
            return true;
        }
    }
    
    render() { 

    console.log("DeleteAll rendered");

    const {onDeleteAll} = this.props;

    // let deleteAllBtn;

    // if(onDeleteAll === true){
    //     deleteAllBtn = (
    //         <button className="d-none"
    //             onClick={onDeleteAll}> 
    //             Delete All  
    //         </button>
    //     );
    // } else{
    //     deleteAllBtn = (
    //         <button className="btn btn-sm btn-warning mt-3"
    //             onClick={onDeleteAll}> 
    //             Delete All  
    //         </button>
    //     );
    // }

        return (
            <div className="d-flex justify-content-center">
                <button className="btn btn-sm btn-warning mt-3"
                    onClick={onDeleteAll} > 
                    Delete All  
                </button>

                {/* <button className={"btn btn-sm btn-warning mt-3 " + (todos===0 ? 'd-none' : 'd-block')}
                    onClick={onDeleteAll}> 
                    Delete All  
                </button> */}
{/* 
                {todos.length > 0 && 
                <button className="btn btn-sm btn-warning mt-3"
                    onClick={onDeleteAll} > 
                    Delete All  
                </button>} */}
                
            </div>
        );
    }
}
 
export default DeleteAll;
 
