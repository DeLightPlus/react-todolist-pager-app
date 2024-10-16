import "../../styles/Todo.css";

import EditIcon from "../../Assets/Images/edit-box.png";
import DeleteIcon from "../../Assets/Images/delete-bin.png";

import React, { useState } from 'react';

export function TodoItem({ id, title, prior, completed, handlePriority, toggleTodo, deleteTodoItem, handleEdit })
{
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newPriority, setNewPriority] = useState(prior);

    const handleUpdate = () => {
        handleEdit(id, newTitle, newPriority)
 
        setIsEditing(false);
      };

    return(
        <li key={id}>
        {
            isEditing ? (
                <div id="item-editing">

                    <div id="item-text">
                        <input type="text" value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)} />
                    </div>
                    
                    <div className="p-container">  
                        <div style={{ display: 'flex', flexDirection:'column', alignItems:'end' }}> 
                            
                            <button onClick={handleUpdate}>update</button>
                            <button onClick={() => setIsEditing(false)}> cancel </button>
                            
                            <select className={ newPriority } id="priority" value={newPriority}
                                onChange={(e) => setNewPriority(e.target.value)} >
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                            
                        </div> 
                    </div>
                    
                </div>
            ) : (
                <div id="item">

                    <div id="item-text">
                        <label style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                        {title}
                        </label>
                    </div>                    
                    
                    <div className="p-container">                        
                        <div style={{ display: 'flex', flexDirection:'row', textAlign:'center' }}>
                            <input id="check" type="checkbox" checked={ completed }
                                onChange={(e) => toggleTodo(id, e.target.checked)} />
                            <button id="edit" onClick={() => setIsEditing(true)}><img src={EditIcon} alt="Edit" /></button>
                            <button id="del" onClick={() => deleteTodoItem(id)}><img src={DeleteIcon} alt="Delete" /></button>
                        </div>

                        <div style={{ display: 'flex', flexDirection:'column', textAlign:'center' }}> 
                            <label> Priority </label>
                            <select className={prior} id="priority" value={prior} 
                                    onChange={(e) => handlePriority(id, e.target.value)} >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                            </select>
                        </div>
                    </div> 

                </div>
            )
        }
        </li>
        
    )
}