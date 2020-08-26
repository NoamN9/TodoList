import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
  return (
    <>
      <li className={classes.li} style={{}}>
        
          
        <input  className={classes.checkbox} type="checkbox" onChange={() => props.onCheckbox(props.index)} />
          {props.edit ? (
            <>
            <input className={classes.iteminput} type="text" value={props.text} onChange={(e)=>props.onEdittextitem(props.index,e.target.value)} style={{margin:'5px'}} />
            <button  className={classes.savebutton} onClick={()=>props.onEdittext(props.index)}>Save edit</button>
            </>
          ) : (
            <div  className={classes.itemtext} onClick={() => props.onEdittext(props.index)}>
              {props.text}
            </div>
          )}
       
      
        <button  className={classes.removebutton} onClick={() => props.onRemoveClick(props.index)} >Remove</button>
      </li>
    </>
  );
};

export default TodoItem;


