import "../../styles/Todo.css";
import { TodoItem } from "../Todo/TodoItem";

import React, { useState } from "react";

const TodoList = ({ todoList, handlePriority, toggleTodo, deleteTodoItem, handleEdit }) =>
{  
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => 
    {
        setSearchQuery(e.target.value);
    };

    const filteredTodoList = todoList.filter(
        todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="list-container">
            <input className="search" type="text" placeholder="Search( &#x1F50E; )"
                value={searchQuery} onChange={handleSearchChange} />
            <ul className='list'>
                {filteredTodoList.length === 0 && "No Todos"}
                {filteredTodoList.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id}
                            handlePriority={handlePriority}
                            toggleTodo={toggleTodo}
                            deleteTodoItem={deleteTodoItem}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
        </div>
    )
}


export default TodoList;


