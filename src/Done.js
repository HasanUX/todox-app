import React from "react";

//input: liked : boolean
//output : onClick : 
//simple dom component

//converted to stateless func comp from class comp
const Done = props => {
  let iconName = "fa fa-2x fa-check-circle";
  if(!props.done) iconName += "fa fa-2x fa-circle-o";
  // const liked = status ? iconName : `${iconName}-o`;
  return (  
    <i style={{cursor: "pointer"}} 
    onClick={props.onClick}
    className={iconName}>
    </i>
  );
}
 
export default Done;


