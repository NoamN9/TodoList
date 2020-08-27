import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = ({text,key,onCheckbox,index,onEdittextitem,onRemoveClick,edit,onEdittext}) => {
  return (
    <>
      <li className={classes.li}>
        
          
        <input  className={classes.checkBox} type="checkbox" onChange={() => onCheckbox(index)} />
          {edit ? (
            <>
            <input className={classes.itemInput} type="text" value={text} onChange={(e)=>onEdittextitem(index,e.target.value)}  />
            <button  className={classes.saveButton} onClick={()=>onEdittext(index)}>Save edit</button>
            </>
          ) : (
            <div  className={classes.itemText} onClick={() => onEdittext(index)}>
              {text}
            </div>
          )}
       
      
        <button  className={classes.removeButton} onClick={() => onRemoveClick(index)} >Remove</button>
      </li>
    </>
  );
};

export default TodoItem;


