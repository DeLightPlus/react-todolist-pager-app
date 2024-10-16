import "../../styles/Todo.css";

import LogoutIcon from "../../Assets/Images/logout-box.png";
import DeleteAccIcon from "../../Assets/Images/user-minus-line.png";

import TodoForm from '../../Components/Todo/TodoForm.js'
import TodoList from '../../Components/Todo/TodoList.js'

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home()
{
    const navigate = useNavigate();
    const curUser = JSON.parse( localStorage.getItem("Users") );   

    const [todoList, setTodoList] = useState(() =>
    {
        const localValue = localStorage.getItem("TodoItems");
        if(localValue == null){ return [] }
      
        return JSON.parse(localValue)
    })
      
    useEffect(() => 
    {      
        localStorage.setItem("TodoItems", JSON.stringify(todoList));
    }, [todoList]);

    const handleLogout = () =>
    {
        // alert("trying to logout?")
        localStorage.removeItem("LoggedIn");
        navigate("/login");
    }
      
    function addTodo(title, prior)
    {
        setTodoList(currentList =>
        {
            return [...currentList, 
            { id: crypto.randomUUID(), user:curUser.username, title, prior, completed: false}, ]
        })
    } 

    function handlePriority(id, prior)
    {
        // alert(prior)
        setTodoList(currentList => 
            {
                return currentList.map(todo =>
                    {
                        if(todo.id === id){ return { ...todo, prior } }
                        return todo
                    })
            })
    }
      
    function toggleTodo(id, completed)
    {
        setTodoList(currentList => 
        {
            return currentList.map(todo =>
                {
                    if(todo.id === id){ return { ...todo, completed } }
                    return todo
                })
        })
    }
      
    function deleteTodoItem(id)
    {
        setTodoList(currentList => 
        {
                // alert("Delete ?");
            return currentList.filter(todo => todo.id !== id);
        })
    } 
    
    const handleEdit = (id, newText, newPriority) =>
    {
        //alert("trying to edit " + newText)
        setTodoList( todoList.map(todo => todo.id === id ? { ...todo, title: newText, prior: newPriority } : todo));
    }
   

    return( 
    <>
        <div className="Header-main"> 
            <h1>Welcome: { curUser.username }</h1>
            <div>
                <button id="delAccButton"> <img src={ DeleteAccIcon } /> </button>
                <button id="logoutButton" type="button"
                    onClick={handleLogout}> <img src={ LogoutIcon } /> </button>
            </div>  
        </div>      
            
        
        <div className="container">
            <h2>Todo List</h2>       
            <div className="todo-list-container">
                <TodoForm onSubmit={ addTodo }  />
                <TodoList 
                    todoList={ todoList } 
                    handlePriority={ handlePriority }               
                    toggleTodo={ toggleTodo } 
                    deleteTodoItem={ deleteTodoItem }
                    handleEdit={ handleEdit }
                />
            </div>
        </div>
    </>
    )
}